import { Helmet } from "react-helmet";

const PageTitle = ({ title }) => {
    return (
        <Helmet>
            <title>FoodHive | {title}</title>
        </Helmet>
    );
};

export default PageTitle;