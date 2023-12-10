function ContentMessage(){
    return(
        <div className="content-form">
                    <form className="forms" id="form-message" /*onSubmit={handleSubmit(onSubmit)}*/ encType="multipart/form-data">
                        
                        <div className="group-input">
                            <label htmlFor="mode" className="label-form">Mode de Transmission</label>
                            <div className="mode-form">
                                <label htmlFor="onGroupe" className="groupe-label" >Message Groupé : <input type="radio" value={'onGroupe'} className="form-radio" name="mode" id="onGroupe" {...register("mode", { require: true })} required/></label>
                                <label htmlFor="onIndividuel" className="groupe-label" >Individuellement : <input type="radio" value={'onIndividuel'} className="form-radio" name="mode" id="onIndividuel" {...register("mode", { require: true })} required/></label>
                            </div>
                        </div>

                        <div className="group-input" id="group-input-canal">
                            <label htmlFor="canal" className="label-form">Canal</label>
                            <select name="canal" id="canal-message" className="form-select" {...register("canal", { require: true })} required >
                                <option value="" disabled selected>--- Canal de difusion ---</option>
                                <option value="email">Groupe Email</option>
                                <option value="sms">Groupe SMS</option>
                                <option value="whatsapp">Groupe WhatsApp</option>
                            </select>
                        </div>

                        <div className="group-input" id="group-input-groupe">
                            <label htmlFor="groupe" className="label-form">Groupe de difusion</label>
                            <select name="groupe" id="select-groupe" className="form-select" {...register("groupe")} multiple>
                                <option value="" disabled selected>--- Aucun groupe disponible ---</option>
                            </select>
                        </div>

                        <div className="group-input" id="group-input-contact">
                            <label htmlFor="contact" className="label-form">Contacts</label>
                            <select name="contact" id="select-contact" className="form-select" {...register("contact")} multiple>
                                <option value="" disabled selected>--- Aucun contact disponible ---</option>
                            </select>
                        </div>

                        <div className="group-input">
                            <label htmlFor="object" className="label-form">Objet</label>
                            <input type="text" className="form-control" name="object" id="object" placeholder="Nom du Groupe" {...register("object", { require: true })} required/>
                        </div>

                        <div className="group-input">
                            <label htmlFor="contenu" className="label-form">Contenu Textuel</label>
                            <textarea name="contenu" id="contenu" className="form-control" cols="64" rows="10" style={{minHeight: 200+'px', maxHeight:200+'px'}} placeholder="Saisir le contenu" {...register("contenu", { require: true })} required ></textarea>
                        </div>

                        <div className="group-input">
                            <label htmlFor="piecesJointes" className="label-form">Pièces Jointes</label>
                            <input type="file" className="form-control" name="piecesJointes" id="piecesJointes" {...register("piecesJointes", { require: true })} multiple/>
                        </div>

                        <div className="group-action">
                            <button type="reset" id="reset-message"> Annuler</button>
                            <button type="submit" id="submit-message"> Soumettre</button>
                        </div>
                    </form>
                </div>
    )
}

export default ContentMessage;