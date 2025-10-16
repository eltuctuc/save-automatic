<template>
  <div class="about">
    <div class="content-area">
      <h1>Über die Anwendung</h1>
      <p>Dies ist eine AKDB Desktop-Anwendung mit Vue.js 3 und modernem Design.</p>
      <p>Die Anwendung bietet ein vollständiges Authentifizierungssystem mit einem professionellen Interface.</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.about {
  min-height: calc(100vh - 56px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.content-area {
  text-align: center;
  padding: get-spacing(2xl);
  background: white;
  border-radius: get-border-radius(lg);
  box-shadow: get-shadow(base);
  max-width: 600px;
  width: 100%;
  margin: get-spacing(lg);

  h1 {
    font-family: $font-family-primary;
    font-size: get-font-size(2xl);
    font-weight: get-font-weight(semibold);
    color: get-color(primary);
    margin: 0 0 get-spacing(m) 0;
  }

  p {
    font-family: $font-family-primary;
    font-size: get-font-size(base);
    color: get-color(text-secondary);
    margin: get-spacing(sm) 0;
    line-height: get-line-height(relaxed);
  }
}
</style>