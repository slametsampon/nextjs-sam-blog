import HomeLayout from '../components/home-layout';
import DetailBlogLayout from '../components/detail-blog-layout';

export default function Page() {
  return (
    <>
      <HomeLayout>
        <h1>It's Home page</h1>
      </HomeLayout>
    </>
  );
}
Page.getLayout = function getLayout(page) {
  return (
    <HomeLayout>
      <DetailBlogLayout>{page}</DetailBlogLayout>
    </HomeLayout>
  );
};
