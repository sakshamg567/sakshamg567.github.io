export default function Social({ Icon, Text, Link }) {
   return (
      <a href={Link} target="_blank" rel="noopener noreferrer">
         <span className='items-center flex flex-row hover:text-white gap-1 transition-all duration-100'>
            <Icon fontSize='small' />
            {Text}
         </span>
      </a>
   )
} 