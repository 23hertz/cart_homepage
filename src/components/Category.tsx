import type { ICategory } from "../types/ICategory"


const Category:React.FC<ICategory> = ({name,image}) =>{

return (
    <div className="border-b border-gray-200 py-5">
    <div className={`bg-gray-300 w-[80px] h-[80px] rounded-full mr-3 round object-center object-cover mx-auto`} style={{backgroundImage: `url('${image}')`, backgroundSize: "cover", border:"1px solid #000"}}>
     </div>
        <h3 className="text-xl text-center py-4 font-bold">{name}</h3>
    </div>
);
}

export default Category;