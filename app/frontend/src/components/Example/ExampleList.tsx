import { Example } from "./Example";

import styles from "./Example.module.css";

const DEFAULT_EXAMPLES: string[] = [
    "How should I behave as a CFO?",
    "What are the essential skills-set of the CFO?",
    "What are the roles a modern CFO is expected to play?"
];

const GPT4V_EXAMPLES: string[] = [
    "how should I behave as a CFO?",
    "What are the essential skills-set of the CFO?",
    "What are the roles a modern CFO is expected to play?"
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
