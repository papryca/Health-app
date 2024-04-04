import Menu from "@components/menu/menu";
import Header from "@components/header/header";
import HeaderPart from "@components/header-part/header-part";
import Main from "@components/main/main";
import Aside from "@components/aside/aside";
import Statistic from "@components/statistic/statistic";

const Bills = () => {
  return (
    <div className='bg-page-background dark:bg-page-background-dark'>
      <div className='flex'>
        <div className='dark:bg-page-background-dark'>
          <Menu></Menu>
        </div>
        <div className='w-full'>
          <Header props={<HeaderPart/>}></Header>
          <div className='flex-none lg:flex-row lg:pb-2  sm:m-5 box-border dark:bg-page-background-dark sm:flex sm:flex-col sm:gap-96 md:flex-col  md:gap-0'>
            <Main></Main>
            <Statistic></Statistic>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Bills;
