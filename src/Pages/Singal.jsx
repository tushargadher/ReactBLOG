import React from "react";
import edit from "../Images/edit.png";
import del from "../Images/delete.png";
import { Link } from "react-router-dom";
import Menu from "../Componets/Menu";
const Singal = () => {
  return (
    <>
      <div className="singal">
        <div className="content">
          <img
            src="https://img.freepik.com/free-photo/funny-happy-excited-young-pretty-woman-sitting-table-black-shirt-working-laptop-co-working-office-wearing-glasses_285396-86.jpg"
            alt=""
          />
          {/* user div */}
          <div className="user">
            <img
              src="https://preview.keenthemes.com/metronic-v4/theme_rtl/assets/pages/media/profile/profile_user.jpg"
              alt=""
            />
            <div className="info">
              <span>Tushar</span>
              <p>Posted 2 Day ago</p>
            </div>
            <div className="edit">
              <Link className="links" to={`/write?edit=2`}>
                <img src={edit} alt="edit" />
              </Link>
              <img src={del} alt="delete" />
            </div>
          </div>
          {/* blog title */}
          <h1>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit Eveniet
            alias.
          </h1>
          <p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates vel consequatur quaerat, rerum officiis, ipsum
              laboriosam pariatur in recusandae fuga ad, cupiditate veritatis
              eum distinctio saepe at aperiam et molestiae.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates vel consequatur quaerat, rerum officiis, ipsum
              laboriosam pariatur in recusandae fuga ad, cupiditate veritatis
              eum distinctio saepe at aperiam et molestiae.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates vel consequatur quaerat, rerum officiis, ipsum
              laboriosam pariatur in recusandae fuga ad, cupiditate veritatis
              eum distinctio saepe at aperiam et molestiae.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates vel consequatur quaerat, rerum officiis, ipsum
              laboriosam pariatur in recusandae fuga ad, cupiditate veritatis
              eum distinctio saepe at aperiam et molestiae.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates vel consequatur quaerat, rerum officiis, ipsum
              laboriosam pariatur in recusandae fuga ad, cupiditate veritatis
              eum distinctio saepe at aperiam et molestiae.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates vel consequatur quaerat, rerum officiis, ipsum
              laboriosam pariatur in recusandae fuga ad, cupiditate veritatis
              eum distinctio saepe at aperiam et molestiae.
            </p>
          </p>
        </div>
        {/* <div className="menu">m</div> */}
        <Menu />
      </div>
    </>
  );
};
export default Singal;
