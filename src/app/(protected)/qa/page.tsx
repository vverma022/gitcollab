"use client"
import useProject from "@/hooks/use-projects"
import React from "react"
import { api } from "@/trpc/react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import AskQuestionsCard from "../dashboard/ask-questons"
import MDEditor from "@uiw/react-md-editor"
import CodeReferences from "../dashboard/code-reference"
import { useQuery } from "@tanstack/react-query"




const QAPage = () => {
  const {selectedprojectId} = useProject()
  const {data: question} = api.project.getQuestions.useQuery({selectedprojectId})
  const [questionIndex, setQuestionIndex] = React.useState(0)
  const questions = question?.[questionIndex]

  return (
    <Sheet>
      <AskQuestionsCard />
      <div className="h-4"></div>
      <h1 className="text-xl font-semibold">Saved Questions</h1>
      <div className="h-2"></div>
      <div className="flex flex-col gap-2">
        {questions?.map((question, index) => {
          return <React.Fragment key={question.id}>
            <SheetTrigger onClick={() => setQuestionIndex(index)}>
                <div className="flex items-center gap-4 bg-white rounded-lg p-4 shadow border">
                  <img className="rounded-full" height={30} width={30} src={question.user.imageUrl ?? ""} />
                  <div className="text-left flex flex-col">
                    <div className="flex items-center gap-2">
                      <p className="text-gray-200 line-clamp-1 text-lg font-medium">
                        {question.question}
                      </p>
                      <span className="text-xs text-gray-400 whitespace-nowrap">
                         {question.createdAt.toLocalDateString()}
                      </span>
                    </div>
                    <p className="text-gray-500 line-clamp-1 text-sm">
                      {question.answer}
                    </p>
                  </div>
                </div>
            </SheetTrigger>
          </React.Fragment>
        })}
      </div>
      {question && (
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
                {question.question}
            </SheetTitle>
            <MDEditor.Markdown source={question.answer} />
            <CodeReferences filesReferences={(question.filesReferences ?? []) as any} />
          </SheetHeader>
        </SheetContent>
      )}
    </Sheet>
  )
}

export default QAPage
