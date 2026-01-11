
const Box = ({span} : {span : number}) => {
    const colSpanClasses: { [key: number]: string } = {
        2: 'col-span-2',
        4: 'col-span-4',
        6: 'col-span-6',
        8: 'col-span-8',
        10: 'col-span-10',
        12: 'col-span-12',
        16: 'col-span-16'
    }
    return <div className={`${colSpanClasses[span]} bg-gray-200`}>Box {span}</div>
};

export default Box;