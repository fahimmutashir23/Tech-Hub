import Loader from "../../../Utils/Loader";
import useGetCollectionLength from "../../../Hooks/useGetCollectionLength";
const colors = [
  { id: 0, name: "Tomato", hex: "bg-[#FF1347]" },
  { id: 1, name: "LightSkyBlue", hex: "bg-[#00DD]" },
  { id: 2, name: "Indigo", hex: "bg-[#4B0082]" },
  { id: 3, name: "Gold", hex: "bg-[#FFD700]" },
  { id: 4, name: "LightGreen", hex: "bg-[#90EE60]" },
  { id: 5, name: "HotPink", hex: "bg-[#FF69B4]" },
  { id: 6, name: "SpringGreen", hex: "bg-[#00FF7F]" },
  { id: 7, name: "SteelBlue", hex: "bg-[#4682B4]" },
  { id: 8, name: "OrangeRed", hex: "bg-[#FF4500]" },
  { id: 9, name: "LightBlue", hex: "bg-[#ADD8E6]" },
  { id: 10, name: "Orchid", hex: "bg-[#DA70D6]" },
  { id: 11, name: "Moccasin", hex: "bg-[#FFE4B5]" },
  { id: 12, name: "MediumSlateBlue", hex: "bg-[#7B68EE]" },
  { id: 13, name: "MediumSpringGreen", hex: "bg-[#00FA9A]" },
  { id: 14, name: "DeepPink", hex: "bg-[#FF1493]" },
  { id: 15, name: "Aquamarine", hex: "bg-[#7FFFD4]" },
  { id: 16, name: "SeaGreen", hex: "bg-[#2E8B57]" },
  { id: 17, name: "LightCoral", hex: "bg-[#F08080]" },
  { id: 18, name: "LightSeaGreen", hex: "bg-[#20B2AA]" },
  { id: 19, name: "LightSalmon", hex: "bg-[#FFA07A]" },
];

const AdminHome = () => {
  const [collectionData, collectionLoading] = useGetCollectionLength();

  if (collectionLoading) {
    return <Loader />;
  }

  const statCard = [
    { text: "Total Product in Web", value: collectionData.product || 0 },
    { text: "Total Bookings", value: collectionData.booking || 0 },
    { text: "Total Sale", value: collectionData.sale || 0 },
    { text: "Total Revenue", value: collectionData.revenue || 0 },
    { text: "Total Expense", value: collectionData.expense?.totalExpense || 0 },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-1 px-3">
      {statCard.map((item, idx) => {
        const matchingColor = colors.find(color => color.id === idx);
        return (
          <div
            key={idx}
            className={`px-4 py-10 ${matchingColor && matchingColor.hex} text-white rounded-md shadow-md`}
          >
            <h1 className="text-xl text-center font-semibold">{item.text}</h1>
            <h1 className="text-4xl text-center font-semibold">{item.value}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default AdminHome;
