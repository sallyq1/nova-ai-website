
type BiggerGalaxyButtonProps = {
    buttonText: string;
    textSize?: number;
  };


  const BiggerGalaxyButton: React.FC<BiggerGalaxyButtonProps> = ({ buttonText, textSize }) => {
    return (
    <div>
         
         
         <button className="relative text-white text-lg font-medium  py-3 px-5 rounded-xl  bg-gradient-to-b from-[#00000047] to-[#41208a] shadow-[0px_1px_6px_#8C45FF] shadow-inner-[0px_0px_10px_0px_8C45FF] z-40 hover:bg-[#8940ff62] hover:shadow-inner-[0px_0px_12px_0px_8C45FF] hover:shadow-[0px_0px_20px_#8C45FF] ">
            <div className="absolute inset-0 border-[1.2px] border-white/80 rounded-xl ">
            </div>
            <span className="text-nowrap ">{buttonText}</span>
          </button>

    </div>
  )
}

export default BiggerGalaxyButton