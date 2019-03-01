import { Button } from '../components/common/Form';
import Head from '../components/common/Head';
import Navigation from '../components/navigation';
import { ArticleList } from '../components/articleList';
export default () => {
    return (
        <>
            <Head />
            <Navigation />
            <div>Hello World!</div>
            <Button>버튼</Button>
            <ArticleList />
        </>
    );
};