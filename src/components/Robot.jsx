import Spline from "@splinetool/react-spline";

export default function Robot() {
      return (
            <div className="relative w-full h-full">
                  <div className="absolute bottom-0 w-screen h-[12%] bg-[#18181b]"></div>
                  <Spline scene="https://prod.spline.design/DP9cMa9ptmLGPE2D/scene.splinecode" />;
            </div>
      );
}
