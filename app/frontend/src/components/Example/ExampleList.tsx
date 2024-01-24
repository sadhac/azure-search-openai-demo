import { Example } from "./Example";

import styles from "./Example.module.css";

const DEFAULT_EXAMPLES: string[] = [
    "What does a modern finance function look like?",
    "What does the future role of a CFO look like?",
    "What skills are required of a CFO of the future?",
    "How will the role of CFO change for a future finance function?",
    "What strategic skills are required for a future finance function?",
    "What are the core principles of a finance stewardship programme?",
    "What attributes will allow finance to increase process efficiencies?"
];

const GPT4V_EXAMPLES: string[] = [
    "What does a modern finance function look like?",
    "What does the future role of a CFO look like?",
    "What skills are required of a CFO of the future?",
    "How will the role of CFO change for a future finance function?",
    "What strategic skills are required for a future finance function?",
    "What are the core principles of a finance stewardship programme?",
    "What attributes will allow finance to increase process efficiencies?"
];

interface Props {
    onExampleClicked: (value: string) => void;
    useGPT4V?: boolean;
}

export const ExampleList = ({ onExampleClicked, useGPT4V }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {(useGPT4V ? GPT4V_EXAMPLES : DEFAULT_EXAMPLES).map((question, i) => (
                <li key={i}>
                    <Example text={question} value={question} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
