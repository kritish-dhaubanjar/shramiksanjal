<template>
  <section class="bg-light">
    <Banner :breadcrumb="{ name: 'Where are we?' }" />
    <div class="container-fluid my-2  py-2 py-md-5 my-md-5">
      <div class="row">
        <div class="col-12 px-0">
          <div class="chartdiv"></div>
        </div>
      </div>
    </div>
    <Section />
  </section>
</template>

<script>
import Section from "@/components/index/Section";
import Banner from "@/components/others/Banner";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_continentsLow from "@amcharts/amcharts4-geodata/continentsLow";

export default {
  data() {
    return {
      imageSeries: [],
      chart: null
    };
  },

  components: {
    Section,
    Banner
  },

  mounted() {
    /* Chart code */

    // Create map instance
    this.chart = am4core.create("chartdiv", am4maps.MapChart);
    this.chart.events.on("ready", function(ev) {
      this.chart.zoomToMapObject(polygonSeries.getPolygonById("IN"));
    });

    this.chart.homeZoomLevel = 1.75;
    this.chart.homeGeoPoint = {
      latitude: 29.3117,
      longitude: 47.4818
    };
    // Disable Zoom
    this.chart.maxZoomLevel = 5;
    // this.chart.chartContainer.wheelable = false;
    // Disable Pan
    // this.chart.seriesContainer.draggable = false;
    // this.chart.seriesContainer.resizable = false;

    // Set map definition
    this.chart.geodata = am4geodata_continentsLow;

    // Set projection
    this.chart.projection = new am4maps.projections.Miller();

    // Create map polygon series
    let polygonSeries = this.chart.series.push(new am4maps.MapPolygonSeries());

    // Exclude Antartica
    polygonSeries.exclude = ["antarctica"];

    // Make map load polygon (like country names) data from GeoJSON
    polygonSeries.useGeodata = true;

    let pattern = new am4core.LinePattern();
    pattern.width = 4;
    pattern.height = 4;
    pattern.stroke = am4core.color("#df1a17");
    pattern.strokeWidth = 0.65;
    pattern.rotation = 45;

    polygonSeries.data = [
      {
        id: "europe",
        name: "Europe",
        fill: pattern
      },
      {
        id: "northAmerica",
        name: "North America",
        fill: pattern
      },
      {
        id: "southAmerica",
        name: "South America",
        fill: pattern
      },
      {
        id: "africa",
        name: "Africa",
        fill: pattern
      },
      {
        id: "asia",
        name: "Asia",
        fill: pattern
      },
      {
        id: "oceania",
        name: "Australia and Oceania",
        fill: pattern
      }
    ];

    // Configure series
    let polygonTemplate = polygonSeries.mapPolygons.template;
    // polygonTemplate.tooltipText = "{name}";
    polygonTemplate.propertyFields.fill = "fill";

    // Create hover state and set alternative fill color
    // let hs = polygonTemplate.states.create("hover");
    // hs.properties.fill = am4core.color("#df1a17");

    /*Bullets
     */

    let imageSeries = this.chart.series.push(new am4maps.MapImageSeries());
    imageSeries.mapImages.template.propertyFields.longitude = "longitude";
    imageSeries.mapImages.template.propertyFields.latitude = "latitude";
    imageSeries.mapImages.template.tooltipText = "{title}";

    let circle = imageSeries.mapImages.template.createChild(am4core.Circle);
    circle.radius = 2.5;
    circle.propertyFields.fill = "color";

    let circle2 = imageSeries.mapImages.template.createChild(am4core.Circle);
    circle2.radius = 2.5;
    circle2.propertyFields.fill = "color";

    circle2.events.on("inited", function(event) {
      animateBullet(event.target);
    });

    function animateBullet(circle) {
      let animation = circle.animate(
        [
          { property: "scale", from: 1, to: 2.5 },
          { property: "opacity", from: 1, to: 0 }
        ],
        1000,
        am4core.ease.circleOut
      );
      animation.events.on("animationended", function(event) {
        animateBullet(event.target.object);
      });
    }

    let colorSet = new am4core.ColorSet();

    /*
    [
        {
            title: "Copenhagen",
            latitude: 55.6763,
            longitude: 12.5681,
            color: "#000"
        },
    ]*/
    this.$axios.get("/api/collections/get/locations").then(({ data }) => {
      this.imageSeries = data.entries;
      imageSeries.data = this.imageSeries.map(e => {
        e.latitude = +e.latitude;
        e.longitude = +e.longitude;
        e.color = "#2E3094";
        return e;
      });
    });
  }
};
</script>

<style scoped>
.chartdiv {
  height: 320px !important;
}

@media screen and (min-width: 576px) {
  .chartdiv {
    height: 512px !important;
  }
}
@media screen and (min-width: 768px) {
  .chartdiv {
    height: 768px !important;
  }
}
</style>
