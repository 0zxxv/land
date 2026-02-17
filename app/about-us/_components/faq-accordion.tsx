"use client";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  questions: FAQItem[];
  activeIndex: number;
  onActiveChange: (index: number) => void;
}

export function FAQAccordion({
  questions,
  activeIndex,
  onActiveChange,
}: FAQAccordionProps) {
  return (
    <div className="space-y-4">
      {questions.map((item, index) => {
        const isActive = index === activeIndex;
        return (
          <button
            key={index}
            onClick={() => onActiveChange(index)}
            className={`w-full rounded-2xl px-5 py-4 text-left transition-colors ${
              isActive
                ? "bg-slate-800 text-white"
                : "bg-[#F3F4F6] text-slate-800"
            }`}
          >
            <div className="flex items-center justify-between gap-2">
              <span className="font-medium">
                {index + 1}. {item.question}
              </span>
              <span
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-xl font-medium text-white ${
                  isActive ? "bg-slate-700" : "bg-slate-800"
                }`}
              >
                {isActive ? "−" : "+"}
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
}
