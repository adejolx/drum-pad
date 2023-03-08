export type TPad = {
  keyTrigger: string;
  audio: string;
  description: string;
};

export type Tbank = {
  name: string;
  samples: TPad[];
};

export const bankOne: Tbank = {
  name: "bank 1",
  samples: [
    {
      keyTrigger: "Q",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
      description: "Heater 1",
    },
    {
      keyTrigger: "W",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
      description: "Heater 2",
    },
    {
      keyTrigger: "E",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
      description: "Heater 3",
    },
    {
      keyTrigger: "A",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
      description: "Heater 4",
    },
    {
      keyTrigger: "S",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
      description: "Clap",
    },
    {
      keyTrigger: "D",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
      description: "Open HH",
    },
    {
      keyTrigger: "Z",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
      description: "Kick n' Hat",
    },
    {
      keyTrigger: "X",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
      description: "Kick",
    },
    {
      keyTrigger: "C",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
      description: "Close HH",
    },
  ],
};

// export const bankTwo: Tbank = [];
