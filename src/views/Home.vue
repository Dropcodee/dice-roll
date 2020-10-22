<template>
  <div class="home">
    <section class="w-10/12 container mx-auto">
      <div class="grid grid-cols-4 gap-4 mt-10 mx-auto w-full">
        <router-link :to="{ name: 'Game', params: { name: 'card-game' } }">
          <div
            class="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 flex flex-col items-center"
          >
            <div class="card">
              <div class="card__image h-12">
                <img src="https://unsplash.it/400/608?image=123" alt="" />
                <div class="card__overlay card__overlay--indigo">
                  <div class="card__overlay-content">
                    <ul class="card__meta">
                      <li>
                        <a href="#0"><i class="fa fa-tag"></i>Casino</a>
                      </li>
                    </ul>
                    <a href="#0" class="card__title">Dice Roll Game.</a>
                    <ul class="card__meta card__meta--last"></ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </router-link>
        <div
          class="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 flex flex-col items-center"
        >
          <router-link :to="{ name: 'Game', params: { name: 'card-game' } }">
            <div class="card">
              <div class="card__image h-12">
                <img src="https://unsplash.it/400/608?image=123" alt="" />
                <div class="card__overlay card__overlay--indigo">
                  <div class="card__overlay-content">
                    <ul class="card__meta">
                      <li>
                        <a href="#0"><i class="fa fa-tag"></i> Casino</a>
                      </li>
                    </ul>
                    <a href="#0" class="card__title">Card Game</a>
                    <ul class="card__meta card__meta--last"></ul>
                  </div>
                </div>
              </div>
            </div>
          </router-link>
        </div>
        <div
          class="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 flex flex-col items-center"
        >
          <router-link :to="{ name: 'Game', params: { name: 'card-game' } }">
            <div class="card">
              <div class="card__image h-12">
                <img src="https://unsplash.it/400/608?image=123" alt="" />
                <div class="card__overlay card__overlay--indigo">
                  <div class="card__overlay-content">
                    <ul class="card__meta">
                      <li>
                        <a href="#0"><i class="fa fa-tag"></i>Casino</a>
                      </li>
                    </ul>
                    <a href="#0" class="card__title">Roulette</a>
                    <ul class="card__meta card__meta--last"></ul>
                  </div>
                </div>
              </div>
            </div>
          </router-link>
        </div>
        <div
          class="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 flex flex-col items-center"
        >
          <div class="card">
            <div class="card__image h-12">
              <img src="https://unsplash.it/400/608?image=123" alt="" />
              <div class="card__overlay card__overlay--indigo">
                <div class="card__overlay-content">
                  <ul class="card__meta">
                    <li>
                      <a href="#0"><i class="fa fa-tag"></i>Casinos</a>
                    </li>
                  </ul>
                  <a href="#0" class="card__title">Mines</a>
                  <ul class="card__meta card__meta--last"></ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="w-10/12 mx-auto">
      <div class="">
        <wagers-table></wagers-table>
      </div>
    </section>
  </div>
</template>
<script>
import WagersTable from '@/components/Layouts/Tables/WagersTable'
export default {
  name: 'Home',
  components: { WagersTable }
}
</script>
<style lang="scss" scoped>
$indigo: #5c6bc0;
$blue: #29b6f6;
$black: #717171;
$body-font-family: "Lato";
$header-font-family: "Montserrat";
// Card Article
.card {
}

.card__image {
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  display: block;
  min-height: 240px;
  overflow: hidden;
  position: relative;

  > img {
    display: block;
    margin-bottom: 0;

    -webkit-transition: all 0.25s ease-in-out;
    -moz-transition: all 0.25s ease-in-out;
    -ms-transition: all 0.25s ease-in-out;
    -o-transition: all 0.25s ease-in-out;
    transition: all 0.25s ease-in-out;
  }

  &:hover > img {
    -webkit-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -ms-transform: scale(1.2);
    -o-transform: scale(1.2);
    transform: scale(1.2);
  }
}

.card__title {
  color: white;
  display: inline-block;
  font-family: $header-font-family;
  font-size: 1.5em;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 0.75em;
  text-decoration: none;

  -webkit-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;

  &:hover {
    color: rgba(white, 0.7);
    text-decoration: none;
  }
}

.card__overlay {
  content: "";
  bottom: 0;
  display: block;
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 1;
}

.card__overlay--indigo {
  background-image: linear-gradient(
    to bottom,
    rgba($indigo, 0.1),
    rgba($indigo, 0.8)
  );
  z-index: 2;
}

.card__overlay--blue {
  background-image: linear-gradient(
    to bottom,
    rgba($blue, 0.1),
    rgba($blue, 0.8)
  );
  z-index: 2;
}

.card__overlay-content {
  position: absolute;
  bottom: 0;
  padding: 1.5em;
  z-index: 3;
}

.card__meta {
  margin: 0;
  margin-right: -1em;
  margin-bottom: 0.75em;

  &.card__meta--last {
    margin-bottom: 0;
  }

  li {
    color: #f8f8f8;
    display: inline;
    list-style-type: none;
    margin-bottom: 0;
    padding-right: 1em;

    font-size: 0.85em;
    font-variant: small-caps;
    letter-spacing: 1px;

    &:not(:last-child):after {
      content: "\25cf";
      font-style: normal;
      position: relative;
      color: rgba(white, 0.25);
      right: -0.6em;
    }

    > a {
      color: #f8f8f8;
    }
  }
}
</style>
