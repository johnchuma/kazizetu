const Loader = ({height}) => {
    return (
      <div className={`flex ${height??"h-125"} items-center justify-center h-screen bg-white`}>
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-slate-950 border-t-transparent"></div>
      </div>
    );
  };
  
  export default Loader;
  