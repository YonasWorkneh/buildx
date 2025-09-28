import { useRef, useState, useEffect } from "react";
import {
  motion,
  PanInfo,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion";
import StatusBar from "./StatusBar";
import {
  Clock,
  Info,
  Mic,
  PhoneIcon,
  PhoneOutgoing,
  Plus,
  Search,
  Star,
  UserCircle,
} from "lucide-react";

const callFilters = ["all", "missed"];
const contacts = [{ name: "Yonas Workneh", phone: "+251986261979" }];

export default function CallLog({
  onClose,
}: {
  onClose?: () => void;
  isFirst?: boolean;
  onSetIsFirst?: (isFirst: boolean) => void;
}) {
  const y = useMotionValue(0);
  const opacity = useTransform(y, [0, 200], [1, 0]);
  const scale = useTransform(y, [0, 200], [1, 0.8]);
  const controls = useAnimation();

  const handleDragEnd = async (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (info.offset.y < -20) {
      await controls.start({
        y: 500,
        opacity: 0,
        scale: 0.8,
        transition: { duration: 0.5 },
      });
      onClose?.();
    } else {
      await controls.start({ y: 0, opacity: 1, scale: 1 });
    }
  };

  const [activeBottomFilter, setActiveBottomFilter] = useState(1);
  const [scrollY, setScrollY] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const contents = [Favorites, Recents, Contacts, Keypad];
  const ActiveContent = contents[activeBottomFilter];
  const bottomFilters = [
    {
      id: 0,
      label: "Favorites",
      icon: (
        <Star
          size={20}
          className={`${activeBottomFilter === 0 ? "text-blue-500" : ""}`}
        />
      ),
    },
    {
      id: 1,
      label: "Recents",
      icon: (
        <Clock
          size={20}
          className={`${activeBottomFilter === 1 ? "text-blue-500" : ""}`}
        />
      ),
    },
    {
      id: 2,
      label: "Contacts",
      icon: (
        <UserCircle
          size={20}
          className={`${activeBottomFilter === 2 ? "text-blue-500" : ""}`}
        />
      ),
    },
    {
      id: 3,
      label: "Keypad",
      icon: (
        <span className="grid grid-cols-3 gap-[2px]">
          {Array.from({ length: 9 }).map((_, i) => (
            <span
              key={i}
              className={`size-[6px] rounded-full ${
                activeBottomFilter === 3 ? "bg-blue-500" : "bg-white"
              }`}
            ></span>
          ))}
        </span>
      ),
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        setScrollY(scrollContainerRef.current.scrollTop);
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div className="h-full w-full bg-[#100f0f] relative">
      <div
        className={`h-full ${
          activeBottomFilter === 3 ? "overflow-hidden" : "overflow-y-auto"
        } scrollbar-hide`}
        ref={scrollContainerRef}
      >
        <div className="min-h-screen pb-20">
          <ActiveContent scrollY={scrollY} />
        </div>

        {/* Sticky Bottom Navigation */}
        <motion.div
          className="sticky bottom-0 z-50 mt-auto"
          style={{
            backdropFilter: "blur(20px)",
            backgroundColor: "rgba(16, 15, 15, 0.443)",
          }}
        >
          {/* Bottom Filters */}
          <div className="w-full flex items-center justify-between px-5 py-3">
            {bottomFilters.map((filter, i) => (
              <button
                key={i}
                className="flex flex-col items-center gap-1"
                onClick={() => setActiveBottomFilter(filter.id)}
              >
                {filter.icon}
                <span
                  className={`text-xs ${
                    filter.id === activeBottomFilter ? "text-blue-500" : ""
                  }`}
                >
                  {filter.label}
                </span>
              </button>
            ))}
          </div>

          {/* Swipe Up Button */}
          <motion.div
            className="w-full h-[.5rem] flex items-center justify-center pb-2"
            style={{
              y,
              opacity,
              scale,
            }}
            drag="y"
            dragConstraints={{ top: 0, bottom: 200 }}
            onDragEnd={handleDragEnd}
          >
            <div className="w-[130px] h-[5px] rounded-full bg-[#e2e1e13c]"></div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

function Recents({ scrollY }: { scrollY: number }) {
  const [activeFilter, setActive] = useState("all");
  return (
    <>
      <motion.div
        className="sticky top-0 z-50"
        style={{
          backdropFilter: scrollY > 10 ? "blur(20px)" : "blur(0px)",
          backgroundColor:
            scrollY > 10 ? "rgba(16, 15, 15, 0.443)" : "rgba(16, 15, 15, 1)",
          transition: "all 0.3s ease",
        }}
      >
        <StatusBar />
        <header className="flex justify-center w-full relative mt-5">
          <div className="p-[2px] rounded-lg bg-[#2A292E]">
            {callFilters?.map((filter, i) => (
              <button
                key={i}
                onClick={() => setActive(filter)}
                className={`py-1 px-8 text-white rounded-lg capitalize ${
                  filter === activeFilter ? "bg-[#68676E]" : "bg-none"
                }`}
              >
                {filter}
              </button>
            ))}
            <button className="text-blue-500 h-full flex items-center absolute left-5 top-0">
              Edit
            </button>
          </div>
        </header>
      </motion.div>
      <div className="px-5 mt-5 min-h-[25vh] pb-20">
        <h1 className="text-2xl py-[2px] font-bold">Recents</h1>
        {/* Search bar */}
        {activeFilter === "all" ? (
          <>
            <div className="bg-[#1e1e1e] p-2 rounded-lg flex justify-between items-center my-3">
              <div className="flex gap-2">
                <Search size={16} />
                <p className="text-sm">Search</p>
              </div>
              <Mic size={16} />
            </div>
            <div className="space-y-4">
              {contacts.map((contact, i) => (
                <a
                  key={i}
                  href={`tel:${contact.phone}`}
                  className="flex justify-between py-[2px]"
                >
                  <div className="flex gap-2">
                    <p className="size-10 bg-gray-100/70 rounded-full flex items-center justify-center text-center uppercase text-sm">
                      {contact.name[0]}
                    </p>
                    <div>
                      <p className="capitalize">{contact.name}</p>
                      <span className="text-gray-500 flex gap-2 items-center">
                        <PhoneOutgoing className="text-gray-500" size={14} />
                        mobile
                      </span>
                    </div>
                  </div>
                  <p className="flex gap-1 items-center">
                    <span className="text-sm">Today</span>
                    <Info className="text-blue-500" size={18} />
                  </p>
                </a>
              ))}
            </div>
          </>
        ) : (
          <div className="h-[50vh] grid place-items-center my-auto">
            <p className="text-xl">No Recents</p>
          </div>
        )}
      </div>
    </>
  );
}

function Favorites({ scrollY }: { scrollY: number }) {
  return (
    <>
      <motion.div
        className="sticky top-0 z-50"
        style={{
          backdropFilter: scrollY > 10 ? "blur(20px)" : "blur(0px)",
          backgroundColor:
            scrollY > 10 ? "rgba(16, 15, 15, 0.443)" : "rgba(16, 15, 15, 1)",
          transition: "all 0.3s ease",
        }}
      >
        <StatusBar />
        <header className="flex justify-center items-center w-full relative mt-8">
          <h1 className="font-bold text-center">Favorites</h1>
          <button className="text-blue-500 h-full flex items-center absolute right-5 top-0">
            <Plus size={18} />
          </button>
        </header>
      </motion.div>
      <div className="px-5 mt-5 min-h-[50vh] flex justify-center items-center">
        <p className="text-xl py-[2px] font-semibold">No Favorites</p>
      </div>
    </>
  );
}

function Contacts({ scrollY }: { scrollY: number }) {
  return (
    <>
      <motion.div
        className="sticky top-0 z-50"
        style={{
          backdropFilter: scrollY > 10 ? "blur(20px)" : "blur(0px)",
          backgroundColor:
            scrollY > 10 ? "rgba(16, 15, 15, 0.443)" : "rgba(16, 15, 15, 1)",
          transition: "all 0.3s ease",
        }}
      >
        <StatusBar />
        <header
          className={`flex justify-center w-full ${
            scrollY > 10 ? "mt-5" : "mt-12"
          }`}
        >
          <div className="w-full px-5">
            <h1
              className={`py-[2px] font-bold ${
                scrollY > 10 ? "text-center text-lg" : "text-2xl text-left"
              }`}
            >
              Contacts
            </h1>
            <button
              className={`text-blue-500 h-full flex items-center absolute right-5 -top-5 ${
                scrollY > 10 ? "-top-2" : "-top-5"
              }`}
            >
              <Plus />
            </button>
            <div className="bg-[#1e1e1e] p-2 rounded-lg flex justify-between items-center my-3">
              <div className="flex gap-2">
                <Search size={16} />
                <p className="text-sm">Search</p>
              </div>
              <Mic size={16} />
            </div>
          </div>
        </header>
        <div
          className={`h-[1px]  bg-white/10 px-5 relative  ${
            scrollY > 10 ? "left-0 w-full" : "left-5 w-[calc(100%-40px)]"
          }`}
        />
      </motion.div>

      <div className="px-5 mt-5 min-h-[25vh] pb-20">
        {/* Search bar */}

        <div className="space-y-4">
          {contacts.map((contact, i) => (
            <a
              key={i}
              href={`tel:${contact.phone}`}
              className="flex justify-between py-[2px]"
            >
              <div className="flex gap-3">
                <p className="size-10 bg-gray-100/70 rounded-full flex items-center justify-center text-center uppercase text-sm">
                  {contact.name[0]}
                </p>
                <div>
                  <p className="capitalize">{contact.name}</p>
                  <span className="text-gray-400 text-sm">My Card</span>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="h-[40vh] flex items-center justify-center flex-col max-w-[200px] mx-auto gap-2">
          <h2 className="text-2xl font-semibold">No Contacts</h2>
          <p className="text-sm text-white/60 text-center">
            Contacts you have added will appear here.
          </p>
          <p className="text-blue-500 capitalize">Create new contact</p>
        </div>
      </div>
    </>
  );
}
const keypad = [
  { number: "1", letters: "" },
  { number: "2", letters: "ABC" },
  { number: "3", letters: "DEF" },
  { number: "4", letters: "GHI" },
  { number: "5", letters: "JKL" },
  { number: "6", letters: "MNO" },
  { number: "7", letters: "PQRS" },
  { number: "8", letters: "TUV" },
  { number: "9", letters: "WXYZ" },
  { number: "*", letters: "" },
  { number: "0", letters: "+" },
  { number: "#", letters: "" },
];
function Keypad() {
  const [dial, setDial] = useState("");

  const handlePress = (value: string) => {
    setDial((prev) => `${prev}${value}`);
  };

  const handleCall = () => {
    if (!dial) return;
    const anchor = document.createElement("a");
    anchor.href = `tel:${dial}`;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  const formatDial = (value: string) => {
    // lightweight spacing: add a space every 3 chars, but keep leading '+'
    const sign = value.startsWith("+") ? "+" : "";
    const digits = sign ? value.slice(1) : value;
    const spaced = digits.replace(/(.{3})/g, "$1 ").trim();
    return `${sign}${spaced}`;
  };

  useEffect(() => console.log(dial), [dial]);

  return (
    <>
      <StatusBar />
      <div className="min-h-[calc(100vh-140px)] grid grid-rows-[auto_1fr_auto]">
        {/* Display */}
        <div className="flex flex-col items-center justify-end mt-14 h-24">
          <p className="text-3xl tracking-wider font-medium tabular-nums h-9 flex items-center">
            {dial ? formatDial(dial) : ""}
          </p>
          <div className="h-6 flex items-center">
            <button
              className={`text-[#2181ff] ${
                dial.length ? "opacity-100" : "opacity-0"
              } transition-opacity duration-200`}
            >
              Add Number
            </button>
          </div>
        </div>

        {/* Keypad */}
        <div className="grid grid-cols-3 place-items-center gap-5 max-w-[270px] mx-auto self-center">
          {keypad.map((key, i) => (
            <button
              type="button"
              onClick={() => handlePress(key.number === "0" ? "0" : key.number)}
              key={i}
              className="flex flex-col items-center justify-center bg-[#3d3d3d] size-[70px] rounded-full text-4xl active:scale-95 transition-transform"
            >
              <span>{key.number}</span>
              <span className="text-[10px]" style={{ lineHeight: "1rem" }}>
                {key.letters.split("").join(" ")}
              </span>
            </button>
          ))}
          <button
            type="button"
            onClick={handleCall}
            className="grid place-items-center col-start-2 col-end-3 bg-[#54BC5A] size-[70px] rounded-full text-3xl font-semibold active:scale-95 transition-transform"
            aria-label="Call"
          >
            <PhoneIcon className="fill-white text-2xl" />
          </button>

          <button>
            {dial.length ? (
              <div
                className="text-white bg-[#3d3d3d] w-[30px] rounded-[4px] flex items-center justify-center pl-[5px] text-lg h-[18px] text-center"
                style={{
                  clipPath:
                    "polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%)",
                }}
                onClick={() => setDial(dial.slice(0, dial.length - 1))}
              >
                <span className="-mt-[3px]">x</span>
              </div>
            ) : (
              <></>
            )}
          </button>
        </div>

        {/* spacer for sticky bottom nav */}
        <div className="h-16" />
      </div>
    </>
  );
}
