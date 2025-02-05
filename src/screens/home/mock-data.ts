import { FullCardProps } from "./types";

export const mockData: FullCardProps[] = [
  {
    imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    username: "john_doe",
    userPhoto: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79",
    comments: {
      username: "jane_smith",
      userPhoto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      message: "Great post!",
      replies: [
        {
          username: "john_doe",
          userPhoto:
            "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79",
          message: "Thanks!",
        },
      ],
    },
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    username: "alice_wonderland",
    userPhoto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    comments: {
      username: "bob_builder",
      userPhoto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      message: "Nice work!",
      replies: [
        {
          username: "alice_wonderland",
          userPhoto:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
          message: "Appreciate it!",
        },
        {
          username: "charlie_brown",
          userPhoto:
            "https://images.unsplash.com/photo-1528892952291-009c663ce843",
          message: "I agree!",
        },
      ],
    },
  },
  {
    username: "charlie_brown",
    userPhoto: "https://images.unsplash.com/photo-1528892952291-009c663ce843",
    comments: {
      username: "snoopy",
      userPhoto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
      message: "Awesome!",
    },
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    username: "david_jones",
    userPhoto: "https://images.unsplash.com/photo-1528892952291-009c663ce843",
    comments: {
      username: "emma_watson",
      userPhoto: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
      message: "Loved it!",
      replies: [
        {
          username: "david_jones",
          userPhoto:
            "https://images.unsplash.com/photo-1528892952291-009c663ce843",
          message: "Thank you!",
        },
        {
          username: "frank_sinatra",
          userPhoto:
            "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79",
          message: "Well done!",
        },
      ],
    },
  },
  {
    username: "frank_sinatra",
    userPhoto: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79",
    comments: {
      username: "grace_kelly",
      userPhoto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      message: "Fantastic!",
    },
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    username: "harry_potter",
    userPhoto: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    comments: {
      username: "hermione_granger",
      userPhoto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      message: "Brilliant!",
      replies: [
        {
          username: "harry_potter",
          userPhoto:
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
          message: "Thanks, Hermione!",
        },
      ],
    },
  },
  {
    username: "ron_weasley",
    userPhoto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    comments: {
      username: "draco_malfoy",
      userPhoto: "https://images.unsplash.com/photo-1528892952291-009c663ce843",
      message: "Not bad.",
    },
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    username: "luke_skywalker",
    userPhoto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    comments: {
      username: "leia_organa",
      userPhoto: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
      message: "May the Force be with you!",
      replies: [
        {
          username: "luke_skywalker",
          userPhoto:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
          message: "And also with you!",
        },
      ],
    },
  },
  {
    username: "darth_vader",
    userPhoto: "https://images.unsplash.com/photo-1528892952291-009c663ce843",
    comments: {
      username: "obi_wan",
      userPhoto: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79",
      message: "I have the high ground!",
    },
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1528892952291-009c663ce843",
    username: "frodo_baggins",
    userPhoto: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79",
    comments: {
      username: "samwise_gamgee",
      userPhoto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      message: "We did it, Mr. Frodo!",
      replies: [
        {
          username: "frodo_baggins",
          userPhoto:
            "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79",
          message: "Yes, Sam. We did.",
        },
      ],
    },
  },
];