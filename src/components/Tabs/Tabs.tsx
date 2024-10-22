import { useState } from "react";
import { TabsProps } from "./Tabs.d";
import styles from "./Tabs.module.css";

const Tabs = ({ tabs }: TabsProps) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  return (
    <div>
      <div className={styles.tabList} role="tablist">
        {tabs.map((tab, index) => (
          <button
            key={index}
            id={`tab-${index}`}
            className={styles.tab}
            role="tab"
            aria-selected={index === activeTabIndex}
            aria-controls={`tab-panel-${index}`}
            tabIndex={index === activeTabIndex ? 0 : -1}
            onClick={() => setActiveTabIndex(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      {tabs.map((tab, index) => (
        <div
          key={index}
          id={`tab-panel-${index}`}
          className={styles.tabPanel}
          role="tabpanel"
          aria-labelledby={`tab-${index}`}
          hidden={index !== activeTabIndex}
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
