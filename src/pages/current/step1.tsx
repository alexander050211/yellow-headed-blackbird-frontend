import WhiteAdd from '../../assets/icons/ic_add_white.svg';
import { OurButton } from '../../components/button';

export const Step1 = ({ setStep }: { setStep: (step: number) => void }) => {
  return (
    <div className="w-full h-full px-32 py-28 bg-[#0f0909] inline-flex flex-col justify-center items-center overflow-hidden">
      <div className="w-[419px] flex flex-col justify-center items-center gap-14">
        <div className="self-stretch justify-start text-white text-[32px] font-normal font-['Inter']">현재 밤샘 진행 중이지 않습니다</div>
        <OurButton
          onClick={() => {
            localStorage.setItem('step', '2');
            setStep(2);
          }}
          dataIconExists={true}
          dataProperty1="btn-filled"
          dataInput="새 밤샘 진행하기"
          img={{
            src: WhiteAdd,
            alt: 'Icon',
          }}
        />
      </div>
    </div>
  );
};

export default Step1;