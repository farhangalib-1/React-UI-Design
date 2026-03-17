import RightCards from "./RightCards";
const users = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    status: 'Satisfied',
    text: 'These customers actively use our platform, trust our services, and consistently experience high satisfaction levels.',
    color: 'blue'
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    status: 'Underserved',
    text: 'These users have unmet needs and require improved features, better support, and more personalized solutions.',
    color: '#00CEC8'
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    status: 'Underbanked',
    text: 'These individuals lack access to essential banking services and need simple, affordable digital financial solutions.',
    color: 'orange'
  },
   {
    id: 4,
    img: 'https://images.pexels.com/photos/7582897/pexels-photo-7582897.jpeg',
    status: 'Underbanked',
    text: 'These individuals lack access to essential banking services and need simple, affordable digital financial solutions.',
    color: 'orange'
  },
    {
    id: 5,
    img: 'https://images.pexels.com/photos/4342098/pexels-photo-4342098.jpeg',
    status: 'Underbanked',
    text: 'These individuals lack access to essential banking services and need simple, affordable digital financial solutions.',
    color: 'orange'
  },
    {
    id: 6,
    img: 'https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    status: 'Underbanked',
    text: 'These individuals lack access to essential banking services and need simple, affordable digital financial solutions.',
    color: 'orange'
  },

 ]
const Rightcontent = () => {
  return (
    <div id="usercards" className="right w-4/6 p-3 overflow-x-scroll flex justify-between gap-5 ">
        {
            users.map(el=><RightCards id={el.id} img={el.img} status= {el.status} color = {el.color}  text={el.text}/>)
        }
    </div>
  );
};

export default Rightcontent;
