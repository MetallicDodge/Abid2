import {Prisma, PrismaClient} from "@prisma/client"

const client = new PrismaClient();

const getlocation = ():Prisma.userCreateInput[]=>[
{
    loc_id: "00001",
    loc_address: "#23 wuibfe, eubviuriu 560029",
    city:   "Bangalore"  ,
    state:   "Karantaka",
    country:  "India",
    image: "jpeg"
},

];
[
    {
        loc_id: "00002",
        loc_address: "#23 wuibfe, eubviuriu 560078",
        city:   "Bhopal"  ,
        state:   "Madhya Pradesh",
        country:  "India",
        image: "jpeg"
    },
    
];
[
    {
        loc_id: "00003",
        loc_address: "#23 wuibfe, eubviuriu 560029",
        city:   "Solapur"  ,
        state:   "Maharashtra",
        country:  "India",
        image: "jpeg"
    },
];
        
[
    {
        loc_id: "00004",
        loc_address: "#23 wuibfe, eubviuriu 560029",
        city:   "Hyderabad"  ,
        state:   "Telengana",
        country:  "India",
        image: "jpeg"
    },
    
];

[
    {
        loc_id: "00005",
        loc_address: "#23 wuibfe, eubviuriu 560029",
        city:   "Mysuru"  ,
        state:   "Karantaka",
        country:  "India",
        image: "jpeg"
    },
];