import { ArrowRightAlt, GitHub } from "@mui/icons-material";
import { Badge } from "./ui/badge"
import { ArrowRight } from "lucide-react";

export default function ProjectDisplay({ title, details }) {
   const { description, stack, live, github } = details;
   const stackArray = stack.split(', ');

   return (
      <div className="mb-6 p-8 border border-zinc-800 hover:border-emerald-200 transition-all duration-500 hover:text-emerald-200 text-white">
         <div className="flex justify-between items-start mb-2">
            {live ?
               <a href={live} target="_blank" rel="noopener noreferrer">
                  <h3 className="font-bold text-lg">
                     {title}
                  </h3>
               </a>
               : <a href={github} target="_blank" rel="noopener noreferrer">
                  <h3 className="font-bold text-lg">
                     {title}
                  </h3>
               </a>
            }
            <div className="flex gap-2">
               {live && (
                  <a href={live} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:underline transition-all duration-300">
                     Live
                  </a>
               )}
               {github && (
                  <a href={github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:underline transition-all duration-300">
                     GitHub
                  </a>
               )}
            </div>
         </div>
         <p className="text-gray-400 mb-3">{description}</p>
         <div className="flex flex-wrap gap-2">
            {stackArray.map((tech, i) => (
               <Badge key={i} variant="outline" className="border border-zinc-700 text-gray-400 text-xs">
                  {tech}
               </Badge>
            ))}
         </div>
      </div>
   )
}