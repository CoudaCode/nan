import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaWhatsapp } from "react-icons/fa";
import {  BiMicrophone } from "react-icons/bi";
import {
  AiFillStar,
  AiOutlineStar,
  AiOutlinePlus,
  AiOutlineCamera,
} from "react-icons/ai";
import { MdInsertEmoticon } from "react-icons/md";
import things from "./../../assets/images/pourDashboard.jpeg";
import img1 from "./../../assets/images/Message.png";
import img2 from "./../../assets/images/callCenter.jpeg";
import "./Automatisation.css";
function Automatisation() {
  return (
    <div className="Automatisation">
      <div>
        <div className="colore">
          <div className="container">
            <div className="titre">
              <h1>
                Automatisation flexible via{" "}
                <span className="barre">NAN-SEND</span>
              </h1>
            </div>

            <div className="boton">
              <button className="etpe">Design</button>

              <button className="etpe1">Route Message</button>

              <button className="etpe1">Qualification</button>

              <button className="etpe1">Processus Interne</button>

              <button className="etpe1">Action Externe</button>

              <button className="etpe1">Compagnie</button>

              <button className="etpe1">Requis</button>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div className="espace">
            <div className="steps">
              <ul className="list">
                <li className="item">
                  <span className="progress-label">Conversation debut</span>
                  <span className="progress-count">
                    <RxHamburgerMenu className="icon" />
                  </span>
                </li>
                <li className="item current-item">
                  <span className="progress-label">Menu Canals</span>
                  <span className="progress-counte">
                    <RxHamburgerMenu className="icon" />
                  </span>
                </li>
                <li className="item">
                  <span className="progress-label">Canal selectionné</span>
                  <span className="progress-counte">
                    <FaWhatsapp className="icon" />
                  </span>
                </li>
                <li className="item">
                  <span className="progress-label">tagget d'intérêt</span>
                  <span className="progress-counte">
                    <BiMicrophone className="icon" />
                  </span>
                </li>
                <li className="item">
                  <span className="progress-label">Checkout</span>
                  <span className="progress-counte">
                    <RxHamburgerMenu className="icon" />
                  </span>
                </li>
                <li className="item">
                  <span className="progress-label">Conversation fermé</span>
                  <span className="progress-count">
                    {" "}
                    <RxHamburgerMenu className="icon" />
                  </span>
                </li>
              </ul>
            </div>

            <div className="carrelage">
              <div className="monTitre">
                <h2>Message Chat</h2>
              </div>

              <div className="monPara">
                <p>
                  Créez une expérience client de haute qualité avec des menus de
                  discussion polyvalents. Invitez vos contacts à explorer des
                  produits et services et marquez leurs intérêts pour une
                  utilisation future dans des listes de prospects, des
                  diffusions marketing ou des campagnes goutte à goutte.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* DEUXIEME PARTIE */}

        <div className="supervisor">
          <div className="separe">
            <div className="carre">
              <img src={img1} alt="" />
            </div>
            <div className="carre">
              <img src={img2} alt="" />
            </div>
          </div>

          <div className="tire">
            <h1>
              Tableau de bord <span className="barre">du superviseur</span>
            </h1>
            <br />
            <div className="loi">
              <div className="par">
                <p>
                  Un tableau de bord quotidien permettant aux managers de
                  détecter en un coup d'œil les anomalies des conversations ou
                  des agents. Identifiez les conversations en attente ou non
                  résolues depuis trop longtemps et surveillez les performances
                  et la charge de travail des agents en temps réel.
                </p>
              </div>
            </div>
          </div>

          <div className="separe">
            <div className="carre">
              <img src={img2} alt="" />
            </div>
            <div className="carre">
              <img src={img1} alt="" />
            </div>
          </div>
        </div>

        {/* TROISIEME PARTIE */}
        <div className="send">
          <div className="container">
            <div className="flax">
              <div className="premiText">
                <div className="misApart">
                  <h1>NAN - SEND</h1>
                </div>
                <div className="paragraphe">
                  <p>
                    Rejoignez plus de 10 000 <br />
                    organisations à succès
                  </p>
                </div>
                <div className="etoile">
                  <div className="cors">
                    <AiFillStar className="icon" />
                    <AiFillStar className="icon" />
                    <AiFillStar className="icon" />
                    <AiFillStar className="icon" />
                    <AiOutlineStar className="icon" />
                  </div>
                  <p>Basé sur plus de 100 avis</p>
                </div>
              </div>

              <div className="cool">
                <div className="cara">
                  <div className="caro">
                    <div className="second">
                      <p>
                        La vision de NaN repose sur ce que doit être l’avenir de
                        l'Afrique francophone
                      </p>
                      <div className="forImg">
                        <div className="photo">
                          <img src={things} alt="" />
                        </div>
                        <div className="look">
                          <p>Marie Kossiwa Mariam</p>
                          <div className="loop">
                            <AiFillStar className="ico" />
                            <AiFillStar className="ico" />
                            <AiFillStar className="ico" />
                            <AiFillStar className="ico" />
                            <AiFillStar className="ico" />
                          </div>
                        </div>
                      </div>

                      <div className="bout">
                        <div className="search">
                          <AiOutlinePlus />
                          <div className="recher">
                            <input type="text" />
                            <MdInsertEmoticon className="ic" />
                          </div>
                          <div className="fin">
                            <AiOutlineCamera />
                            <BiMicrophone />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className="caro">
                    <div className="second">
                      <p>
                        La vision de NaN repose sur ce que doit être l’avenir de
                        l'Afrique francophone
                      </p>
                      <div className="forImg">
                        <div className="photo">
                          <img src={things} alt="" />
                        </div>
                        <div className="look">
                          <p>Marie Kossiwa Mariam</p>
                          <div className="loop">
                            <AiFillStar className="ico" />
                            <AiFillStar className="ico" />
                            <AiFillStar className="ico" />
                            <AiFillStar className="ico" />
                            <AiFillStar className="ico" />
                          </div>
                        </div>
                      </div>

                      <div className="bout">
                        <div className="search">
                          <AiOutlinePlus />
                          <div className="recher">
                            <input type="text" />
                            <MdInsertEmoticon className="ic" />
                          </div>
                          <div className="fin">
                            <AiOutlineCamera />
                            <BiMicrophone />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className="caro">
                    <div className="second">
                      <p>
                        La vision de NaN repose sur ce que doit être l’avenir de
                        l'Afrique francophone
                      </p>
                      <div className="forImg">
                        <div className="photo">
                          <img src={things} alt="" />
                        </div>
                        <div className="look">
                          <p>Marie Kossiwa Mariam</p>
                          <div className="loop">
                            <AiFillStar className="ico" />
                            <AiFillStar className="ico" />
                            <AiFillStar className="ico" />
                            <AiFillStar className="ico" />
                            <AiFillStar className="ico" />
                          </div>
                        </div>
                      </div>

                      <div className="bout">
                        <div className="search">
                          <AiOutlinePlus />
                          <div className="recher">
                            <input type="text" />
                            <MdInsertEmoticon className="ic" />
                          </div>
                          <div className="fin">
                            <AiOutlineCamera />
                            <BiMicrophone />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="care">
                  <div className="caro">
                    <div className="second">
                      <p>
                        La vision de NaN repose sur ce que doit être l’avenir de
                        l'Afrique francophone
                      </p>
                      <div className="forImg">
                        <div className="photo">
                          <img src={things} alt="" />
                        </div>
                        <div className="look">
                          <p>Marie Kossiwa Mariam</p>
                          <div className="loop">
                            <AiFillStar className="ico" />
                            <AiFillStar className="ico" />
                            <AiFillStar className="ico" />
                            <AiFillStar className="ico" />
                            <AiFillStar className="ico" />
                          </div>
                        </div>
                      </div>

                      <div className="bout">
                        <div className="search">
                          <AiOutlinePlus />
                          <div className="recher">
                            <input type="text" />
                            <MdInsertEmoticon className="ic" />
                          </div>
                          <div className="fin">
                            <AiOutlineCamera />
                            <BiMicrophone />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className="caro">
                    <div className="second">
                      <p>
                        La vision de NaN repose sur ce que doit être l’avenir de
                        l'Afrique francophone
                      </p>
                      <div className="forImg">
                        <div className="photo">
                          <img src={things} alt="" />
                        </div>
                        <div className="look">
                          <p>Marie Kossiwa Mariam</p>
                          <div className="loop">
                            <AiFillStar className="ico" />
                            <AiFillStar className="ico" />
                            <AiFillStar className="ico" />
                            <AiFillStar className="ico" />
                            <AiFillStar className="ico" />
                          </div>
                        </div>
                      </div>

                      <div className="bout">
                        <div className="search">
                          <AiOutlinePlus />
                          <div className="recher">
                            <input type="text" />
                            <MdInsertEmoticon className="ic" />
                          </div>
                          <div className="fin">
                            <AiOutlineCamera />
                            <BiMicrophone />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />

                  <div className="caro">
                    <div className="second">
                      <p>
                        La vision de NaN repose sur ce que doit être l’avenir de
                        l'Afrique francophone
                      </p>
                      <div className="forImg">
                        <div className="photo">
                          <img src={things} alt="" />
                        </div>
                        <div className="look">
                          <p>Marie Kossiwa Mariam</p>
                          <div className="loop">
                            <AiFillStar className="ico" />
                            <AiFillStar className="ico" />
                            <AiFillStar className="ico" />
                            <AiFillStar className="ico" />
                            <AiFillStar className="ico" />
                          </div>
                        </div>
                      </div>

                      <div className="bout">
                        <div className="search">
                          <AiOutlinePlus />
                          <div className="recher">
                            <input type="text" />
                            <MdInsertEmoticon className="ic" />
                          </div>
                          <div className="fin">
                            <AiOutlineCamera />
                            <BiMicrophone />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Automatisation;
