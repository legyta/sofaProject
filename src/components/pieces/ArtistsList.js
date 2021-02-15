import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import artistsList from "../stylesheets/artistsList.css";

function ArtistsList() {
  return (
    <Grid className="artistsList">
      <Box className="artistsList1" style={{ padding: "25px 25px 0px 25px" }}>
        <h3>Marija Baranauskaitė</h3>
        <p>
          creator and initiator of the project, mainly a performer for sofas
        </p>
        <h3>Evita Mikalkėnaitė</h3>
        <p>Fun(d)raiser and manager for sofa and object-oriented shows</p>
        <h3>David Fakete</h3>
        <p>sofa tattooing professional</p>
        <h3>Leonie Kuipers</h3>
        <p>carpets and curtains performer</p>
        <h3>Danielo Amaya</h3>
        <p>furniture deconstructionist constructionist, object juggler</p>
        <h3>Estela Lapponi</h3>
        <p>coat-rack performer</p>
        <h3>Amada Mendez-Piedra Paredes</h3>
        <p>object dating professional</p>
        <h3>James Adamson</h3>
        <p>object psychologist, professional shoe driver</p>
        <h3>Vincent Owoko </h3>
        <p>bench singer</p>
        <h3>Kaisa Ling</h3>
        <p>profesor of bathology, performer and singer for baths</p>
        <h3>Denisas Kolomyckis</h3>
        <p>performer for cameras</p>
        <h3>Greta Grinevičiūtė</h3>
        <p>performer for washing machines</p>
      </Box>
      <Box
        className="artistsList1"
        style={{ padding: "0px 25px 25px 25px", marginTop: "24px" }}
      >
        <h3>Barbora Šiaulytė</h3>
        <p>performer for mirrors</p>
        <h3>Eglė Nešukaitytė</h3>
        <p>dancer and choreographer for objects</p>
        <h3>Lukas DanLucas</h3>
        <p>sofa meditation co-creator, sofa novelist</p>
        <h3>Felix Jean Marecaux</h3>
        <p>cartoonist, writer for sofas</p>
        <h3>Dainius Putinas</h3>
        <p>leading photographer for objects</p>
        <h3>Margarita Jimeno</h3>
        <p>assisting photographer for objects</p>
        <h3>Donatas Ališauskas</h3>
        <p>photographer for sofas</p>
        <h3>Jan Ritsema</h3>
        <p>
          professional critical eye of object-oriented performances, mirror type
          personality
        </p>
        <h3>Kroot Juraak and Alex Baileys</h3>
        <p>creators of shows for pets, inspirers of performing for objects</p>
        <h3>Mark Liberman</h3>
        <p>
          half human half sofa but mostly door type personality composer and
          performer, professional editor of object-oriented texts, transporter
          of objects, destroyer, cleaner{" "}
        </p>
        <h3>Ilja Schamle</h3>
        <p>designer of websites for sofas and other objects</p>
        <h3>Ligita Montvilaitė</h3>
        <p>programmer of websites for sofas and other objects</p>
      </Box>
    </Grid>
  );
}

export default ArtistsList;
