const LayoutPublic = ({ children }: { children: React.ReactNode}) => {
  return ( 
    <div className="min-h-full flex flex-col dark:bg-[#1f1f1f]">
      {children}
    </div>
   );
}
 
export default LayoutPublic;