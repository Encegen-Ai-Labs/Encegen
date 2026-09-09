import { useState } from "react";
import "./ExpandableSteps.css";

export type StepData = {
  id: string;
  number: string;
  title: string;
  desc: string;
  linkText?: string;
  linkUrl?: string;
};

export default function ExpandableSteps({ steps }: { steps: StepData[] }) {
  const [activeId, setActiveId] = useState(steps[0].id);

  return (
    <div className="exp-steps">
      {steps.map((step) => {
        const isActive = activeId === step.id;
        return (
          <div 
            key={step.id} 
            className={`exp-step ${isActive ? "is-active" : ""}`}
            onMouseEnter={() => setActiveId(step.id)}
            onClick={() => setActiveId(step.id)}
          >
            <div className="exp-step__header">
              <h3>{step.title}</h3>
            </div>
            
            <div className="exp-step__content">
              <p>{step.desc}</p>
              
              <div className="exp-step__graphic">
                <div className={`graph-nodes graph-nodes--${step.id}`}>
                  {step.id === 'step-1' && (
                    <div className="connect-hub">
                      <div className="hub-center" />
                      <div className="hub-orbit orbit-1"><div className="hub-dot" /></div>
                      <div className="hub-orbit orbit-2"><div className="hub-dot" /></div>
                      <div className="hub-orbit orbit-3"><div className="hub-dot" /></div>
                    </div>
                  )}
                  {step.id === 'step-2' && (
                    <div className="process-flow">
                      <div className="pf-node pf-n1" />
                      <div className="pf-line pf-l1" />
                      <div className="pf-node pf-n2" />
                      <div className="pf-line pf-l2" />
                      <div className="pf-node pf-n3" />
                    </div>
                  )}
                  {step.id === 'step-3' && (
                    <div className="optimize-chart">
                      <div className="opt-bar bar-1" />
                      <div className="opt-bar bar-2" />
                      <div className="opt-bar bar-3" />
                      <div className="opt-bar bar-4" />
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="exp-step__number">{step.number}</div>
          </div>
        );
      })}
    </div>
  );
}
