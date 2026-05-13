// Projects data for Minh Quang Bui's portfolio.
// Each project has sections; each section has text + media (images/videos).
// Media `src` paths point to /project-media/<slug>/<filename>. Drop the
// extracted ZIP contents into `public/project-media/<slug>/` to make them
// load — captions are pre-cleaned from the source filenames.

export type Media = {
  type: "image" | "video";
  src: string;
  caption: string;
};

export type Section = {
  title: string;
  text?: string;
  media?: Media[];
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  badges: string[];
  summary: string;
  overview: string;
  cover?: string; // thumbnail
  sections: Section[];
};

const m = (
  slug: string,
  file: string,
  caption: string,
  type: "image" | "video" = "image",
): Media => ({
  type,
  src: `/project-media/${slug}/${file}`,
  caption,
});

export const PROJECTS: Project[] = [
  {
    slug: "temperature-sensor",
    title: "Temperature Sensor Project",
    category: "Mechatronics",
    badges: ["Op-Amp", "LCD", "Sensors", "Soldering"],
    summary:
      "Op-amp signal-conditioning circuit with LCD readout and threshold-driven LED for room and skin temperature.",
    overview:
      "This project uses an op-amp based signal-conditioning circuit with an LCD display to measure room temperature and human skin temperature. The system reads the temperature sensor value, displays it on the LCD, and changes the LED color based on the temperature threshold.",
    cover: "/project-media/temperature-sensor/Result.jpeg",
    sections: [
      {
        title: "Wiring",
        text: "Wired the op-amp circuit and the LCD screen separately. The op-amp filtered and prepared the sensor signal while the LCD wiring displayed the temperature value clearly.",
        media: [
          m("temperature-sensor", "Op Amp wiring.jpeg", "Op-amp wiring"),
          m("temperature-sensor", "LCD wiring.jpeg", "LCD wiring"),
        ],
      },
      {
        title: "Combining the Circuit and Test Run",
        text: "The op-amp sensor circuit and LCD display were combined into one complete system, then test-run to verify sensor, LCD and LED behaviour together.",
        media: [
          m("temperature-sensor", "Combine 2 circuit.jpeg", "Combined circuit"),
          m("temperature-sensor", "Test run.jpeg", "Test run"),
        ],
      },
      {
        title: "Problem Faced and Fix",
        text: "The LCD initially showed unreadable values. After re-soldering the LCD and replacing a faulty temperature sensor, readings became stable.",
        media: [m("temperature-sensor", "Problem faced.jpeg", "Problem faced during testing")],
      },
      {
        title: "Result",
        text: "Touching the sensor raised the displayed temperature. Above 37°C the LED turned red; below 37°C it turned blue.",
        media: [m("temperature-sensor", "Result.jpeg", "Final working result")],
      },
      {
        title: "Explanation Video",
        media: [
          m("temperature-sensor", "Explain on sensor heat.mp4", "Heat-sensor explanation", "video"),
        ],
      },
    ],
  },
  {
    slug: "3d-prints",
    title: "Some Cool 3D Prints",
    category: "3D Printing",
    badges: ["Resin", "FDM", "Modeling", "Slicing"],
    summary: "Resin and FDM 3D-print experiments, from digital design to finished models.",
    overview:
      "Different 3D-printing experiments — digital design, resin printing, and FDM printing — showing creativity, slicing prep, print testing, and hands-on fabrication.",
    cover: "/project-media/3d-prints/Final Attack on Titan resin print.JPEG",
    sections: [
      {
        title: "Design",
        text: "Digital model design stage before printing. The model was checked for structure, detail, and print readiness.",
        media: [
          m("3d-prints", "Anime figure 3D design.JPEG", "Anime figure 3D design"),
          m("3d-prints", "Anime figure 3D design 2.JPEG", "Anime figure design — view 2"),
        ],
      },
      {
        title: "Resin Prints",
        text: "Resin printing produced higher-detail models with smoother surfaces and finer features.",
        media: [
          m("3d-prints", "Phoenix resin print.JPEG", "Phoenix resin print"),
          m("3d-prints", "Attack on Titan resin print.JPEG", "Attack on Titan resin print"),
          m("3d-prints", "Final Attack on Titan resin print.JPEG", "Final Attack on Titan print"),
        ],
      },
      {
        title: "FDM Print",
        text: "FDM printing was used to test shape, structure and practical print quality with filament.",
        media: [m("3d-prints", "Anime figure FDM print.JPEG", "Anime figure FDM print")],
      },
    ],
  },
  {
    slug: "robotics-2024",
    title: "Robotics Competition 2024",
    category: "Robotics",
    badges: ["Arduino Mega", "Bluetooth", "PS2 Controller", "H-Bridge"],
    summary:
      "Custom-built competition robot with claw, Bluetooth control and Arduino Mega — built from the ground up.",
    overview:
      "Built for the Skills Ontario robotics competition: a custom frame, circuit system, motor control, claw, Bluetooth control and Arduino Mega — fabricated and assembled by the team rather than from a kit.",
    cover: "/project-media/robotics-2024/Final view of robot.jpg",
    sections: [
      {
        title: "Building From the Ground Up",
        text: "The robot was built from scratch using a custom structure, aluminum frame, wheels, motors, and electronics — no full ready-made kit.",
        media: [
          m("robotics-2024", "Robot structure cut.MOV", "Cutting the robot structure", "video"),
          m("robotics-2024", "Motor Chasis.JPEG", "Motor chassis"),
        ],
      },
      {
        title: "Circuit Build",
        text: "Arduino Mega, PS2 controller input, Bluetooth communication, servos for the claw, DC motors for drive and an H-bridge for direction control.",
        media: [m("robotics-2024", "Circuit build.JPEG", "Circuit build")],
      },
      {
        title: "Final Robot View and Organized System",
        text: "Final robot structure, organized circuit layout, Bluetooth system, and frame design — ready for object-handling tasks.",
        media: [
          m("robotics-2024", "Final view of robot.jpg", "Final view of the robot"),
          m(
            "robotics-2024",
            "Organise circuit and bluetooth system.JPEG",
            "Organised circuit and Bluetooth system",
          ),
          m("robotics-2024", "Robot frame design.JPEG", "Robot frame design"),
        ],
      },
      {
        title: "Robot Result",
        text: "The robot drives, uses the claw to grab objects, and moves them to the required location.",
        media: [m("robotics-2024", "Final testing video.MP4", "Final testing run", "video")],
      },
    ],
  },
  {
    slug: "sonic-car",
    title: "Sonic Car",
    category: "Mechatronics",
    badges: ["Ultrasonic", "Obstacle Detection", "Automation"],
    summary: "Small ultrasonic-sensor car that detects and reacts to obstacles ahead.",
    overview:
      "A small obstacle-detection car using an ultrasonic sensor to bounce sound waves off objects in front of it and react accordingly.",
    cover: "/project-media/sonic-car/Overview of the car.JPEG",
    sections: [
      {
        title: "Overview of the Car",
        text: "Full car setup with the ultrasonic sensor mounted at the front to detect nearby obstacles.",
        media: [m("sonic-car", "Overview of the car.JPEG", "Overview of the car")],
      },
      {
        title: "How the Sonic Car Works",
        text: "The ultrasonic sensor detects objects ahead. When an obstacle is found, the car responds based on the programmed behaviour — a basic automation and detection demo.",
      },
      {
        title: "Final Demonstration",
        text: "Demonstration of the sonic car detecting obstacles and responding during testing.",
        media: [m("sonic-car", "Showing how it work.MOV", "Sonic car in action", "video")],
      },
    ],
  },
  {
    slug: "manufacturing-electrical",
    title: "Manufacturing and Electrical Learning",
    category: "Manufacturing",
    badges: ["Milling", "Band Saw", "Oxy-Fuel", "Servo", "Bluetooth"],
    summary:
      "Hands-on shop and electrical training: machining, cutting, oxy-fuel work, servos and Bluetooth control.",
    overview:
      "Hands-on learning across manufacturing and electrical systems — shop tools, machining, cutting, oxy-fuel work, circuits, servo and motor control, and Bluetooth control.",
    cover: "",
    sections: [
      {
        title: "Manufacturing",
        text: "Hands-on shop practice: milling, vertical and horizontal band saw operation, and oxy-fuel torch use — building tool safety, fabrication confidence and shop awareness.",
        media: [
          m(
            "manufacturing-electrical",
            "Manufacturing, Milling machine (1).mov",
            "Milling machine work",
            "video",
          ),
          m(
            "manufacturing-electrical",
            "Manufacturing, Showing how to use vertical band saw (1).mov",
            "Vertical band saw use",
            "video",
          ),
          m(
            "manufacturing-electrical",
            "Manufacturing, Learn how to use band saw (1).mov",
            "Learning the band saw",
            "video",
          ),
          m(
            "manufacturing-electrical",
            "Manufacturing, using oxy fuel torch (1).mov",
            "Oxy-fuel torch",
            "video",
          ),
        ],
      },
      {
        title: "Electrical",
        text: "Electrical learning through circuit building and control systems: LED circuit counting, servo motor control and Bluetooth-based control.",
        media: [
          m(
            "manufacturing-electrical",
            "Electrical, led circuit count (1).mov",
            "LED circuit counter",
            "video",
          ),
          m(
            "manufacturing-electrical",
            "Electrical, Servo motor control (1).mov",
            "Servo motor control",
            "video",
          ),
          m(
            "manufacturing-electrical",
            "Electrical, Bluetooth control.mp4",
            "Bluetooth control",
            "video",
          ),
        ],
      },
    ],
  },
  {
    slug: "garage-door",
    title: "Arduino Garage Door Built From Scratch",
    category: "Mechatronics",
    badges: ["Arduino", "Limit Switches", "Laser Sensor", "Safety"],
    summary:
      "Cardboard garage-door prototype controlled by Arduino with limit switches and a laser safety sensor.",
    overview:
      "A cardboard garage-door prototype controlled by an Arduino circuit — push buttons, limit switches, a light/laser safety sensor and motors handle safe opening and closing.",
    cover: "",
    sections: [
      {
        title: "How the Garage Door Was Made",
        text: "Cardboard frame, motors, sensors and an Arduino circuit. Push buttons drive open/close, limit switches stop the door at top and bottom, and the laser sensor reverses the door if anyone passes underneath while it closes.",
        media: [
          m(
            "garage-door",
            "Explain on how I make the garage door.mov",
            "How the garage door was built",
            "video",
          ),
        ],
      },
      {
        title: "Final Demonstration",
        text: "Demonstration of opening, closing, limit-switch stops and the safety sensor in action.",
        media: [
          m(
            "garage-door",
            "Final show of how the garage door work.mov",
            "Garage door in operation",
            "video",
          ),
        ],
      },
    ],
  },
  {
    slug: "international-orientation",
    title: "International Orientation Volunteering",
    category: "Volunteering",
    badges: ["Leadership", "Community", "Communication"],
    summary:
      "Helping new international students settle into Canada through ice-breakers, games and group activities.",
    overview:
      "Volunteering with new international students to help them adjust to Canada, meet new people, understand school culture and feel welcomed.",
    cover: "",
    sections: [
      {
        title: "Start Meeting New Friends",
        text: "The opening of orientation, where new students started meeting each other and making first connections.",
        media: [
          m("international-orientation", "Start meeting new friends.PNG", "Meeting new friends"),
        ],
      },
      {
        title: "Ice Breaking With People",
        text: "Ice-breaking activities helped students relax, talk and learn about each other.",
        media: [m("international-orientation", "Ice breaking with people.JPEG", "Ice breakers")],
      },
      {
        title: "Meet New Friends During Orientation",
        text: "As the day went on, students became more comfortable and started forming friendships through shared activities.",
        media: [
          m(
            "international-orientation",
            "Meet new friends during Orientation.JPEG",
            "New friendships forming",
          ),
        ],
      },
      {
        title: "Making a Band With Friends",
        text: "A talent-show activity where friends came together to perform and have fun.",
        media: [
          m("international-orientation", "Making a band with friends.JPEG", "Talent-show band"),
        ],
      },
      {
        title: "Playing Games With People",
        text: "Group games closed the day on an energetic, positive note and built stronger connections.",
        media: [
          m(
            "international-orientation",
            "Playing games with people.MOV",
            "Group games",
            "video",
          ),
        ],
      },
    ],
  },
  {
    slug: "robot-dog",
    title: "Robot Dog",
    category: "Robotics",
    badges: ["Assembly", "Wiring", "Programming", "Teamwork"],
    summary: "Designed, built, wired and programmed a four-legged robot dog with directional control.",
    overview:
      "Designing, building, wiring and programming a robot dog — frame planning, circuit design, motion control, coding, testing and teamwork.",
    cover: "",
    sections: [
      {
        title: "Working Station",
        text: "The workspace used to assemble, test and organize the robot dog project.",
        media: [m("robot-dog", "Working station.jpeg", "Working station")],
      },
      {
        title: "Design",
        text: "Both physical assembly and circuit diagrams were prepared to plan structure and electronics before assembly.",
        media: [
          m("robot-dog", "Assembly diagram.png", "Assembly diagram"),
          m("robot-dog", "Circuit diagram.jpeg", "Circuit diagram"),
        ],
      },
      {
        title: "Robot Motion",
        text: "The robot dog moving during testing.",
        media: [m("robot-dog", "RoboDog Motion Video.mp4", "Robot dog motion", "video")],
      },
      {
        title: "Coding",
        text: "Programmed for forward, backward, left and right via button-based controls so the robot responds correctly to user input.",
        media: [m("robot-dog", "Code for the robot.jpeg", "Robot control code")],
      },
      {
        title: "Overview of the Robot",
        text: "The completed robot dog from different angles, including the assembled frame and visible components.",
        media: [
          m("robot-dog", "Overview of the robot.jpeg", "Robot overview"),
          m("robot-dog", "Overview of the robot 2.jpeg", "Robot overview — view 2"),
        ],
      },
      {
        title: "Explanation of How the Robot Works",
        text: "Walkthrough of how the robot operates and how main components work together.",
        media: [m("robot-dog", "Explain of the robot work.mp4", "How the robot works", "video")],
      },
      {
        title: "Parts Included for Robot",
        text: "Main parts and components included in the build.",
        media: [m("robot-dog", "Part included for robot.png", "Parts list")],
      },
      {
        title: "Team Members",
        text: "The team behind the robot dog project.",
        media: [m("robot-dog", "Team member.jpeg", "Team members")],
      },
    ],
  },
  {
    slug: "jac-motor",
    title: "JAC Motor — Truck Assembly Learning",
    category: "Manufacturing",
    badges: ["Assembly", "Engine", "Gearbox", "Safety"],
    summary:
      "Hands-on learning at a truck-assembly company in Vietnam — body, gearbox, engine and shop safety.",
    overview:
      "Hands-on experience at a truck-assembly company in Vietnam: body assembly, gearbox assembly, engine assembly, industrial tools, heavy equipment, manufacturing workflow and workplace safety.",
    cover: "",
    sections: [
      {
        title: "Company and Assembly Teams",
        text: "Learning how truck body, gearbox and engine assembly are done in a professional manufacturing environment — industrial tools, heavy equipment, safety rules and the role of teamwork.",
        media: [
          m("jac-motor", "Front Company.jpg", "JAC Motor — front of company"),
          m("jac-motor", "Body Assembly team.jpg", "Body assembly team"),
          m("jac-motor", "Gear box and engine assembly team.jpg", "Gearbox & engine assembly team"),
          m("jac-motor", "Body Assembly team (2).jpg", "Body assembly team — group photo"),
        ],
      },
      {
        title: "Company Uniform",
        text: "The company uniform worn during the training experience — a safety-focused, professional environment.",
        media: [m("jac-motor", "Comparny Uniform.jpg", "Company uniform")],
      },
    ],
  },
  {
    slug: "car-technician",
    title: "Car Technician Training",
    category: "Automotive",
    badges: ["Engine", "Tire Change", "Hoist", "Oil Change"],
    summary:
      "Auto-shop training at St. Mary HS: engine work, tires, hoists, oil changes and shop safety.",
    overview:
      "Hands-on automotive training at St. Mary High School Auto Shop — vehicle maintenance, engine work, tire changing, hoist operation, oil changes, VIN reading, jack-stand safety and basic mechanic procedures.",
    cover: "",
    sections: [
      {
        title: "Engine Assembly",
        text: "Engine assembly learning — disassembly, inspection and reassembly of engine components.",
        media: [m("car-technician", "Engine Assembly.JPEG", "Engine assembly")],
      },
      {
        title: "Tire Change",
        text: "Hands-on tire-change practice — removal, replacement and torquing safely.",
        media: [
          m(
            "car-technician",
            "Working on tire change video.mp4",
            "Tire change practice",
            "video",
          ),
        ],
      },
      {
        title: "Teaching Others Tire Change",
        text: "Helping teach exchange students how to change a tire — communication, leadership and skill sharing.",
        media: [
          m(
            "car-technician",
            "Teaching exchange student to change tire video.mp4",
            "Teaching tire change",
            "video",
          ),
          m(
            "car-technician",
            "Teaching exchange student to change tire video 2.mp4",
            "Teaching tire change — part 2",
            "video",
          ),
        ],
      },
      {
        title: "Normal Car Technician Process",
        text: "Routine technician work — using a hoist safely and performing an oil change.",
        media: [
          m(
            "car-technician",
            "Learning using hoist and do oil change.mp4",
            "Hoist & oil change",
            "video",
          ),
        ],
      },
    ],
  },
  {
    slug: "culinary",
    title: "Culinary",
    category: "Culinary",
    badges: ["Prep", "Cooking", "Plating"],
    summary:
      "Restaurant-style culinary training: table setup, food prep, cooking and presentation standards.",
    overview:
      "Culinary training in a professional restaurant-style environment — table setup, food preparation, cooking, plating and presentation.",
    cover: "",
    sections: [
      {
        title: "Learn How to Set Up the Table",
        text: "Setting up a restaurant table properly — organization, placement and presentation standards.",
        media: [m("culinary", "Learn setup the table.JPEG", "Restaurant table setup")],
      },
      {
        title: "Learn How to Make Food",
        text: "Food preparation practice — tomato soup, fried rice and eggs Benedict — building practical cooking skills and kitchen workflow.",
        media: [
          m("culinary", "Making tomato soup.MOV", "Making tomato soup", "video"),
          m("culinary", "Making fried rice.MOV", "Making fried rice", "video"),
          m("culinary", "Making egg Benedict.MOV", "Making eggs Benedict", "video"),
        ],
      },
      {
        title: "Learn How to Present Food",
        text: "Plating and presentation — making each dish look clean, balanced and professional.",
        media: [
          m("culinary", "Food presentation.JPEG", "Food presentation"),
          m("culinary", "Food presentation 2.JPEG", "Food presentation — view 2"),
          m("culinary", "Learn how to presenting food.JPEG", "Learning food presentation"),
        ],
      },
    ],
  },
  {
    slug: "robotics-2023",
    title: "Robotics Competition 2023",
    category: "Robotics",
    badges: ["Arduino", "Bluetooth", "PS2", "Fabrication"],
    summary:
      "Skills Ontario competition robot built from scratch — fabrication, electronics and overnight troubleshooting.",
    overview:
      "Built from scratch for the Skills Ontario robotics competition without a standard kit — custom fabrication, electronics, soldering, motors, batteries, PS2/Bluetooth control on Arduino, troubleshooting and competition prep.",
    cover: "",
    sections: [
      {
        title: "Skills Ontario Robotics Competition 2023",
        text: "A competition where students design, build, test and operate robots to complete tasks — mechanical design, electrical wiring, programming, teamwork and problem solving under time pressure.",
      },
      {
        title: "Building From the Ground Up",
        text: "Built from scratch with motors, drill batteries, a fabricated aluminum chassis, PS2 controller, Bluetooth and an Arduino-based control system — assembled and soldered in-house.",
        media: [
          m("robotics-2023", "Circuit.JPEG", "Custom circuit"),
          m("robotics-2023", "Circuit 2.JPEG", "Circuit — view 2"),
        ],
      },
      {
        title: "Robot Overview",
        text: "Completed robot structure with mechanical and electrical layout.",
        media: [m("robotics-2023", "Robot overview.JPEG", "Robot overview")],
      },
      {
        title: "Testing",
        text: "Early testing of motor movement, control response and basic robot functions before competition.",
        media: [
          m(
            "robotics-2023",
            "Testing Robot motors and function.MOV",
            "Testing motors and functions",
            "video",
          ),
          m("robotics-2023", "First run test video.mp4", "First-run test", "video"),
        ],
      },
      {
        title: "Before Competition",
        text: "Final checks and adjustments at the hotel before the event.",
        media: [
          m("robotics-2023", "Hotel Room before competition.JPEG", "Hotel room — pre-competition"),
        ],
      },
      {
        title: "Challenge and Time Pressure",
        text: "The biggest challenge was time — working in Grade 12 alongside college and university applications meant most build hours happened after school, with extra hours close to deadline.",
        media: [
          m("robotics-2023", "Team member.JPEG", "Team during build"),
          m("robotics-2023", "Team member1.JPEG", "Team members"),
        ],
      },
      {
        title: "Technical Problem Faced",
        text: "The PS2 controller signal failed during prep, the original controller stopped working — code was rewritten overnight and a backup controller was wired in to keep the robot running.",
        media: [
          m("robotics-2023", "Coding adjustment.jpg", "Overnight code adjustment"),
          m(
            "robotics-2023",
            "Problem happen on the control system.png",
            "Control-system fault",
          ),
          m(
            "robotics-2023",
            "Fixing robot Control system.mp4",
            "Fixing the control system",
            "video",
          ),
        ],
      },
      {
        title: "Final Adjustment During Competition",
        text: "A motor failed mid-competition. Final motor adjustments were completed quickly to keep the robot operational.",
        media: [m("robotics-2023", "Final adjustment.png", "Final on-site adjustment")],
      },
      {
        title: "Funny Experience",
        text: "A memorable, lighthearted moment with friends during the competition trip.",
        media: [
          m("robotics-2023", "Random funny moment with friend.JPEG", "Funny moment with friends"),
        ],
      },
    ],
  },
  {
    slug: "anet-a8",
    title: "3D Printer Fix and Upgrade — Anet A8",
    category: "3D Printing",
    badges: ["Repair", "Assembly", "Wiring", "Calibration"],
    summary:
      "Repaired, assembled, wired and tuned an Anet A8 3D printer — from frame to first print.",
    overview:
      "Repairing, assembling, setting up, wiring, organizing and testing an Anet A8 3D printer — hands-on troubleshooting, mechanical assembly, circuit organization and print testing.",
    cover: "",
    sections: [
      {
        title: "Assembly",
        text: "Early assembly of the Anet A8 — main frame and parts brought together.",
        media: [m("anet-a8", "Assembly old 3D printer.JPEG", "Assembling the printer")],
      },
      {
        title: "View After Assembly",
        text: "Completed printer structure, ready for setup, wiring checks and calibration.",
        media: [m("anet-a8", "The view after assembly.JPEG", "View after assembly")],
      },
      {
        title: "Setting the 3D Printer After Assembly",
        text: "Adjustment and preparation after assembly so the printer could operate correctly.",
        media: [
          m("anet-a8", "Setting 3D printer after assembly.JPEG", "Post-assembly setup"),
        ],
      },
      {
        title: "Organizing the Circuit",
        text: "Wiring and circuit system organized for a cleaner, safer and more troubleshoot-friendly machine.",
        media: [
          m("anet-a8", "Organising circuit.JPEG", "Organising the circuit"),
          m("anet-a8", "Organising the circuit 2.JPEG", "Organised circuit — view 2"),
        ],
      },
      {
        title: "Test Print Run",
        text: "Final test print confirmed the printer was working after assembly, setup and circuit organization.",
        media: [m("anet-a8", "Test print run.MOV", "Test print run", "video")],
      },
    ],
  },
];
