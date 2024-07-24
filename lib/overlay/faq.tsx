import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionList,
} from "@tremor/react";

const questions = [
  {
    question: "What is Old Growth?",
    answer:
      "Old growth forest is late spectral. Old growth forest is important because its carbon sync and biodiversity are superlinear with juvenile succession forest plantings associated with managed timber areas ([4]).",
  },
  {
    question: "What are the consequences of harvesting old growth?",
    answer:
      "Clear-cutting or harvesting of old growth forest results in a dramatic loss of biodiversity, . ",
  },
  {
    question: "Why do timber companies harvest old growth?",
    answer:
      "The same attributes which make old growth forest so naturally rich contribute to efficient and significant quantities of timber.",
  },
  {
    question: "How accurrate is this data?",
    answer:
      "The Old Growth data is taken from Geo [1] and timber harvest data from USFS [2]. This map is only as accurrate as these sources. Note that not all old growth in Oregon is mapped here.",
  },
  {
    question: "Is it legal to harvest Old Growth timber in Oregon?",
    answer:
      "Yes, however there are many restrictions, primarily governed by XYZ. In practice, it is difficult to enforce these restrictions, especially with little public knowledge of the planned harvests.",
  },
  {
    question:
      "I'm interested in learning more. Are there similar efforts? How could this be improved?",
    answer: `Oregon Wild has a project with https://oregonwild.org/nasa-maps-and-report-highlight-oregons-clearcutting-epidemic/ and Stand.Earth https://stand.earth/press-releases/stand-research-group-launches-forest-eye-satellite-tool-to-track-old-growth-logging/ monitors. Global Forest Watch (GFW) is likely the most comprehensive resource to learn more about global forest cover <a href="https://www.globalforestwatch.org/map">GWF</a>.`,
  },
];

export function FAQ() {
  return (
    <>
      <AccordionList className="text-tremor-default my-2 auto-rows-auto text-left shadow-transparent">
        {questions.map((question) => (
          <Accordion
            key={question.question}
            className="border-none text-left [&>button]:p-0"
          >
            <AccordionHeader
              key={question.question}
              className="text-left font-semibold text-blue-800"
            >
              {question.question}
            </AccordionHeader>
            <AccordionBody className="text-tremor-default text-left [&>button]:p-0">
              <p className="">{question.answer}</p>
            </AccordionBody>
          </Accordion>
        ))}
      </AccordionList>
    </>
  );
}
