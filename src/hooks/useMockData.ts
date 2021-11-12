import { Activity } from "../model/activity";

export const useActivities = (): Activity[] => {
  return [
    {
      id: "0",
      title: "Kayak webshop",
      sectorName: "e-commerce"
    },
    {
      id: "1",
      title: "Electronics webshop",
      sectorName: "e-commerce"
    },
    {
      id: "2",
      title: "Flowers webshop",
      sectorName: "e-commerce"
    },
    {
      id: "3",
      title: "Software development",
      sectorName: "IT"
    },
    {
      id: "4",
      title: "UX design",
      sectorName: "IT"
    },
    {
      id: "5",
      title: "IT consultancy",
      sectorName: "IT"
    }
  ];
};
