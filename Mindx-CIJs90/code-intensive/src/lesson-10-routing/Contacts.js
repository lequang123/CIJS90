export const GetContacts = () => {
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    return delay(2000).then(() => {
      return [
        {
          first: "Your",
          last: "Name",
          avatar: "https://placekitten.com/g/200/200",
          twitter: "twitter your name",
          notes: "Some notes",
          favorite: true,
        },
        {
          first: "Your",
          last: "Friend",
          avatar: "https://placekitten.com/g/200/200",
          twitter: "twitter your friend",
          notes: "Some notes",
          favorite: true,
        },
      ];
    });
};
