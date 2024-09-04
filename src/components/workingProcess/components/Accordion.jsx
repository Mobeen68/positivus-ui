/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
// import { ChevronDownIcon } from "@radix-ui/react-icons";
// import "./styles.css";

const ProcessAccordion = ({ id, title, description }) => (
  <Accordion.Root
    className="AccordionRoot"
    type="single"
    // defaultValue="item-1"
    collapsible
  >
    <Accordion.Item className="AccordionItem" value="item-1">
      <AccordionTrigger>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <h2>{id}</h2> <h4>{title}</h4>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <p>{description}</p>
      </AccordionContent>
    </Accordion.Item>
  </Accordion.Root>
);

const AccordionTrigger = React.forwardRef(
  ({ children, ...props }, forwardedRef) => (
    <Accordion.Header className="AccordionHeader">
      <Accordion.Trigger
        className="AccordionTrigger"
        {...props}
        ref={forwardedRef}
      >
        {children}
        {/* <ChevronDownIcon className="AccordionChevron" aria-hidden /> */}
        <div className="AccordionChevron" aria-hidden>
          <div className="AccordionChevronBorder"></div>
        </div>
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

const AccordionContent = React.forwardRef(
  ({ children, ...props }, forwardedRef) => (
    <Accordion.Content
      className="AccordionContent"
      {...props}
      ref={forwardedRef}
    >
      <div className="AccordionContentText">{children}</div>
    </Accordion.Content>
  )
);

export default ProcessAccordion;
