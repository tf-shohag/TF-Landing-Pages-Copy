"use client"
import { useEffect, useRef } from "react"

// This is the only client component needed
const FormLoader = ({ formId }) => {
  const formRef = useRef(null)

  useEffect(() => {
    if (!formRef.current) return

    // Create and append the Bitrix24 script
    const script = document.createElement("script")
    script.async = true
    
    // Only force immediate loading on desktop
    if (formId === "desktop") {
      script.defer = false
    }
    
    script.src = "https://cdn.bitrix24.com/b15773863/crm/form/loader_780.js"
    script.setAttribute("data-b24-form", "inline/780/626wsm")
    script.setAttribute("data-skip-moving", "true")
    formRef.current.appendChild(script)
  }, [formId])

  return <div ref={formRef}></div>
}

export default FormLoader