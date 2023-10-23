const Notfound = () => {
  return (
    <div className="h-full w-full flex items-center justify-center dark:bg-[#1f1f1f]">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl font-extrabold text-violet-500">404</h1>
        <h3 className="text-2xl font-medium text-violet-500">
          Page is not exist
          <span>
            <span className="text-rose-500">.</span>
            <span className="text-violet-500">.</span>
            <span className="text-rose-500">.</span>
          </span>
        </h3>
        <p className="text-zinc-500 dark:text-zinc-400 mt-4 text-sm">
          Unless you&apos;re not in the future, 
          I think you must be accessing something that doesn&apos;t exist.
        </p>
      </div>
    </div>
  );
};

export default Notfound;
