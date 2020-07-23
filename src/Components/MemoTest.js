import React, {useState} from 'react';
import { WidthProvider, Responsive } from "react-grid-layout";
const ResponsiveReactGridLayout = WidthProvider(Responsive);



function MemoTest() {
    const [state, setState] = useState([1,2]);
    const props = {
        className: "layout",
        cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
        rowHeight: 100
    };
    console.log(state);
    const onAddItem = () => {
        console.log("adding", "n" + state.length + 1);
        setState([...state, state.length + 1]);
    }

    const createElement = (el) => {
        return (
            <div key={el} className='block' style={{padding: 0}}>
                <span
                    className="add text"
                    onClick={onAddItem}
                    title="You can add an item by clicking here, too."
                >
                add
                </span>
            </div>
        );
    }

    return (
        <div>
            <ResponsiveReactGridLayout
                {...props}
            >
                {state.map(el => createElement(el))}
            </ResponsiveReactGridLayout>
        </div>
    );
}

export default MemoTest;