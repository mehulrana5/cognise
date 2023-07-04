import React, { useEffect, useState } from 'react';

export default function Article(props) {
    const [display, setDisplay] = useState(props.isActive ? "block" : "none");

    useEffect(() => {
        if (props.isActive) {
            setDisplay("block");
        } else {
            setDisplay("none");
        }
        // eslint-disable-next-line
    }, [props.isActive]);

    return (
        <div className='container' style={{ display: display ,transition:'ease-in-out'}}>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Title</h5>
                    <p style={{ textAlign: 'left' }}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit ipsum aut atque molestiae nam, eligendi accusamus vero debitis exercitationem incidunt ab totam, magni quisquam earum! Possimus tempore quae, perferendis veniam reprehenderit assumenda aliquid deleniti culpa minus accusamus soluta neque necessitatibus quaerat sit, optio adipisci atque esse nobis. Itaque est, eveniet magnam aliquid ipsum modi nisi culpa expedita ullam explicabo molestias praesentium provident laborum, pariatur exercitationem ratione fugit voluptatibus. Eveniet consequatur ducimus corrupti odio ut molestias quod excepturi dolore eos, suscipit, exercitationem qui est asperiores aliquid harum, accusantium sapiente laudantium ipsam tempore! Soluta blanditiis placeat in autem officiis est vel porro qui at explicabo earum quas eveniet, quis tempora saepe sit commodi praesentium facere sequi quidem vitae ratione consequatur ea dolor? Facilis error maiores officiis rem minus aliquid ipsum, nisi libero nihil, vitae, id ipsa repellendus sequi architecto sed? Delectus aperiam velit similique expedita suscipit illo, voluptas quos atque, eveniet est a eum eligendi nisi laborum repellendus placeat error debitis veniam repellat. Fuga quaerat molestiae cumque error velit sed non obcaecati, esse beatae blanditiis ex temporibus, iste aspernatur nulla quo, magnam perferendis doloremque. Fugiat repudiandae reiciendis reprehenderit harum suscipit, atque ea obcaecati rerum. Nobis quidem ex eum! Eius ea laudantium voluptas ipsa deleniti dignissimos quae voluptatum asperiores suscipit incidunt a, consectetur, reprehenderit sit illum alias minima aliquam optio maxime facilis? Earum quidem minima, inventore modi nulla voluptate, repellat temporibus quia consequatur porro similique, dolorum ipsum neque quas repudiandae corrupti molestiae! Atque vitae debitis dolore earum maxime, modi accusamus aspernatur dicta nihil quo repellat rerum, natus ab maiores deleniti in! Minus nihil dicta veritatis ipsa est reiciendis facilis, nobis maiores inventore aspernatur ullam sunt obcaecati numquam! Deleniti facere accusantium asperiores qui temporibus impedit eligendi voluptatibus iure tempora ex, ad dignissimos inventore voluptatum hic, id aperiam reiciendis distinctio nulla! Consequatur odit voluptate tempore!
                    </p>
                </div>
            </div>
        </div>
    );
}
