const reviews = [
    {
        id: 0,
        reviewer: "Ervin Myers",
        review: "Utterly inspiring piece about youth.",
        url: "https://images.unsplash.com/photo-1483653364400-eedcfb9f1f88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
    },
    {
        id: 1,
        reviewer: "Etoile Provencher",
        review: "This was a nuanced depiction of struggle to find the self.",
        url: "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
    },
    {
        id: 2,
        reviewer: "Wang Su",
        review: "An impressive acting debut for the lead actor.",
        url: "https://images.unsplash.com/photo-1418075285575-c402f1f7340f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2942&q=80"
    },
    {
        id: 3,
        reviewer: "Danilo Castro Barbosa",
        review: "The producing was particularly compelling, given that the producers are newly breaking into the industry.",
        url: "https://images.unsplash.com/photo-1504913659239-6abc87875a63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
    },
    {
        id: 4,
        reviewer: "Valencia Mireles Carrera",
        review: "Excellent use of imagery of New York.",
        url: "https://images.unsplash.com/photo-1522083165195-3424ed129620?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2797&q=80"
    }
];

const synopsis = "In a world gone mad, it takes a special kind of crazy to survive. Or so he has thought, waking up in the dead of the night to decide to quit his job and move to New York City. Uprooting himself from a familiar life half the country away, he moved at that same night. Arriving at New York with little more than a tiny suitcase, he started off looking for himself. He met a group of travellers who let him stay in their van for the night for three months, made multiple unlikely and perculiar friendships with people at all corners while trying to stay afloat. He saw his childhood best friend on one of the billboards in Times Square and asked himself what had made them drift apart in the first place, and reflected on the ever-widening gap between them now. Hoping to return to his long-lost passion with music, he saved up enough to purchase himself a guitar. Years later, he would think back on what he had lost and those things he had found in New York. Now, he was just trying to survive to see the next sunrise. This is the story of a young man's memories, dreams, hopes that have been lost and found on the streets of Manhattan."

const films = [
    {
        id: 0,
        img: "images/header.JPG",
        url0: "index.html",
        url1: "#",
        name: "Looking For New York",
        summary: "A young man’s memories, dreams, hopes lost and found on the streets of Manhattan."
    },
    {
        id: 1,
        img: "images/sunset.JPG",
        url0: "#",
        url1: "#",
        name: "Can You Hear The Birds Sing",
        summary: "A trip through the sounds of Saadiyat."
    },
    {
        id: 2,
        img: "https://images.unsplash.com/photo-1582882198551-c0d7f863c5dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2990&q=80",
        url0: "#",
        url1: "#",
        name: "A Season at the Heart of the World",
        summary: "Two friends’ journey to see the world, right at the middle of Dubai."
    },
    {
        id: 3,
        img: "https://images.unsplash.com/photo-1483389127117-b6a2102724ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2874&q=80",
        url0: "#",
        url1: "#",
        name: "Friend Request Received",
        summary: "Two strangers realize their lives are more intertwined than they thought."
    },
    {
        id: 4,
        img: "images/sunset2.JPG",
        url0: "#",
        url1: "#",
        name: "A Series of Nothing-Out-of-the-Blue Events",
        summary: "A college student goes about his typical, ordinary day. Except that he has been through this exact day. Multiple times."
    },
    {
        id: 5,
        img: "https://images.unsplash.com/photo-1627931539006-d5c4677e05ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
        url0: "#",
        url1: "#",
        name: "I Have Heard It All Before",
        summary: "Calls for action to all the young people of the world."
    },
    {
        id: 6,
        img: "https://images.unsplash.com/photo-1495885531856-008baf2cbaac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2874&q=80",
        url0: "#",
        url1: "#",
        name: "A Tale of Two Cities",
        summary: "Four months, two friends, one story that spans and connects Abu Dhabi and New York."
    },
    {
        id: 7,
        img: "https://images.unsplash.com/photo-1598912592915-26ac8f20d44e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
        url0: "#",
        url1: "#",
        name: "Something to Talk about",
        summary: "Long-lost childhood friends find each other through a random text message."
    }
];