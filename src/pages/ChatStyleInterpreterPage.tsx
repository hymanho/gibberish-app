import {useState} from "react";

import {TranslationResult} from "../lib/type";

function ResultEntry({result}: {result: TranslationResult}){
    return (
        <div style={{
            border: "1px solid black",
        }}>
            <p>{result.sourceLanguage} -&gt; {result.targetLanguage}</p>
            <p>{result.targetText}</p>
        </div>
    );
}

export default function ChatStyleInterpreterPage(){
    const [results, setResults] = useState<TranslationResult[]>([]);
    function addResult(result: TranslationResult){
        setResults([...results, result]);
    }
    function clearResults(){
        setResults([]);
    }
    
    function addRandomResult(){
        const presetResults: TranslationResult[] = [
            {
                sourceLanguage: "decimal",
                targetLanguage: "hexadecimal",
                sourceText: "101",
                targetText: "65"
            },
            {
                sourceLanguage: "hexadecimal",
                targetLanguage: "decimal",
                sourceText: "0xACED",
                targetText: "44269"
            }
        ];
        
        addResult(presetResults[Math.floor(Math.random() * presetResults.length)]);
    }
    
    return (
        <div>
            <h1>Interpreter Page (Chat-Style)</h1>
            
            <hr/>
            {results.map((result, index) => {
                return <ResultEntry key={index} result={result}/>;
            })}
            <hr/>
            
            <button onClick={addRandomResult}>Add Random Result</button>
            <button onClick={clearResults}>Clear Results</button>
        </div>
    );
}
