"use client";

import { getExecutionResult, useCodeEditorStore } from "@/store/useCodeEditorStore";
import { motion } from "framer-motion";
import { Loader2, Play } from "lucide-react";

function RunButton() {
  const { runCode, language, isRunning } = useCodeEditorStore();

  // Mock save execution function
  const saveExecution = async (execution: {
    language: string;
    code: string;
    output?: string;
    error?: string;
  }) => {
    console.log("Execution saved:", execution);
  };

  const handleRun = async () => {
    await runCode();
    const result = getExecutionResult();

    if (result) {
      await saveExecution({
        language,
        code: result.code,
        output: result.output || undefined,
        error: result.error || undefined,
      });
    }
  };

  return (
    <motion.button
      onClick={handleRun}
      disabled={isRunning}
      whileTap={{ scale: 0.98 }}
      className={`group relative inline-flex items-center gap-2.5 px-5 h-[42px] disabled:cursor-not-allowed focus:outline-none transition-all duration-100
      `}
    >
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500  opacity-100 transition-opacity group-hover:opacity-90" />

      <div className="relative flex items-center gap-2.5">
        {isRunning ? (
          <>
            <div className="relative">
              <Loader2 className="w-4 h-4 animate-spin text-white/70" />
              <div className="absolute inset-0 blur animate-pulse" />
            </div>
            <span className="text-sm font-medium text-white/90">Executing...</span>
          </>
        ) : (
          <>
            <div className="relative flex items-center justify-center w-4 h-4">
              <Play className="w-4 h-4 text-white/90 transition-transform group-hover:scale-110 group-hover:text-white" />
            </div>
            <span className="text-sm font-medium text-white/90 group-hover:text-white">
              Run Code
            </span>
          </>
        )}
      </div>
    </motion.button>
  );
}

export default RunButton;
