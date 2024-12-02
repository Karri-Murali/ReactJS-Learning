import { EXAMPLES } from "../data";
import Section from "./Section";
import TabButton from "./TabButton";
import { useState } from "react";
import Tabs from "./Tabs";

export default function Examples() {
    const [selectedValue, setSelectedValue] = useState('');

    let tabContent = <p>Please Select a Topic</p>;
    if (selectedValue) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedValue].title}</h3>
                <p>{EXAMPLES[selectedValue].description}</p>
                <pre>
                    <code>
                        {EXAMPLES[selectedValue].code}
                    </code>
                </pre>
            </div>
        );
    }
    function handleSelect(selectedButton) {
        setSelectedValue(selectedButton);
        console.log(selectedButton);
    }
    return (
        <Section id="examples" title="Examples">
            <Tabs 
            buttonsContainer="menu"
            buttons={
                <>
                    <TabButton isSelected={selectedValue === 'components'} onClick={() => handleSelect('components')}>Components</TabButton>
                    <TabButton isSelected={selectedValue === 'jsx'} onClick={() => handleSelect('jsx')}>JSX</TabButton>
                    <TabButton isSelected={selectedValue === 'props'} onClick={() => handleSelect('props')}>Props</TabButton>
                    <TabButton isSelected={selectedValue === 'state'} onClick={() => handleSelect('state')}>State</TabButton>
                </>
            }>

            </Tabs>
            {tabContent}

            {/* Another Way of Rendering Dynamic Content : 1.  {selectedValue && <p>Please Select a Topic</p>} 
           2. {!selectedValue ? <p>Please Select a Topic</p> : (<div id="tab-content">
                <h3>{EXAMPLES[selectedValue].title}</h3>
                <p>{EXAMPLES[selectedValue].description}</p>
                <pre>
                    <code>
                        {EXAMPLES[selectedValue].code}
                    </code>
                </pre>
    </div>)} */}

        </Section>
    )
}