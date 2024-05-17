import moment from "moment";


const Copyright = () => {
    const year = moment().format('YYYY');
    return (
        <div className="bg-gray-200 py-pl_secondary px-2 lg:px-0">
            <div className="max-w-7xl mx-auto flex items-center flex-col lg:flex-row justify-between">
                <p className="text-text_gray text-center">
                &copy; {year} All right reserved by Green Dot LTd. | Developed & Design by WB Softwares.
                </p>
                <p className="text-text_gray">
                    Sitemap | privacy policy
                </p>
            </div>
        </div>
    );
};

export default Copyright;