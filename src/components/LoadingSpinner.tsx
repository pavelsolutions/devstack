const LoadingSpinner = () => {
    return (
        // <div className="flex min-h-[50vh] items-center justify-center">
        //   <div className="h-14 w-14 animate-spin rounded-full border-4 border-gray-200 border-t-[#D91B7E]"></div>
        // </div>

        <div className="flex min-h-[50vh] items-center justify-center">
            {/* <span className="loading loading-spinner loading-lg text-secondary"></span> */}
            <span className="loading loading-spinner h-20 w-20 text-brand-pink"></span>
        </div>
    );
};

export default LoadingSpinner;