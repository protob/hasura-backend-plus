(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{371:function(s,t,a){"use strict";a.r(t);var e=a(26),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"getting-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[s._v("#")]),s._v(" Getting started")]),s._v(" "),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[s._v("#")]),s._v(" Installation")]),s._v(" "),a("h3",{attrs:{id:"nhost"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nhost"}},[s._v("#")]),s._v(" Nhost")]),s._v(" "),a("p",[s._v("The easiest way to deploy HBP is with the official "),a("a",{attrs:{href:"https://nhost.io",target:"_blank",rel:"noopener noreferrer"}},[s._v("Nhost"),a("OutboundLink")],1),s._v(" managed service. Get your perfect configured backend with PostgreSQL, Hasura and Hasura Backend Plus and save yourself hours of maintenance per month.")]),s._v(" "),a("p",[s._v("All "),a("a",{attrs:{href:"https://nhost.io",target:"_blank",rel:"noopener noreferrer"}},[s._v("Nhost"),a("OutboundLink")],1),s._v(" projects are built on open source software so you can make realtime web and mobile apps fast 🚀.")]),s._v(" "),a("div",{staticStyle:{"text-align":"center"}},[a("a",{attrs:{href:"https://nhost.io/register",target:"_blank"}},[a("img",{attrs:{src:"https://github.com/nhost/hasura-backend-plus/raw/master/docs/.vuepress/public/nhost-register-button.png",width:"200px"}})])]),s._v(" "),a("h3",{attrs:{id:"docker-compose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose"}},[s._v("#")]),s._v(" Docker-Compose")]),s._v(" "),a("p",[s._v("Create the following "),a("code",[s._v("docker-compose.yaml")]),s._v(" file, and modify the Hasura Admin Secret in both "),a("code",[s._v("graphql-engine")]),s._v(" and "),a("code",[s._v("hasura-backend-plus")]),s._v(" services.")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3.6'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("postgres")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" postgres"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("restart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" always\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("POSTGRES_PASSWORD")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" postgrespassword\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" db_data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/var/lib/postgresql/data\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("graphql-engine")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" hasura/graphql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("engine"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("v1.2.1\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'8080:8080'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("depends_on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'postgres'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("restart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" always\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("HASURA_GRAPHQL_DATABASE_URL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" postgres"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//postgres"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("postgrespassword@postgres"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("5432/postgres\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("HASURA_GRAPHQL_ADMIN_SECRET")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'$HASURA_GRAPHQL_ADMIN_SECRET'")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("HASURA_GRAPHQL_JWT_SECRET")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{"type": "RS256", "jwk_url": "http://hasura-backend-plus:3000/auth/jwks"}\'')]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("HASURA_GRAPHQL_ENABLED_CONSOLE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'true'")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("hasura-backend-plus")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nhost/hasura"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("backend"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("plus"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("latest\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3000:3000'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("restart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" always\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./custom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/app/custom\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("SERVER_URL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3000")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("HASURA_ENDPOINT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//graphql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("engine"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("8080/v1/graphql\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("HASURA_GRAPHQL_ADMIN_SECRET")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'$HASURA_GRAPHQL_ADMIN_SECRET'")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("JWT_ALGORITHM")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" RS256\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("S3_ENDPOINT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//minio"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9000")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("S3_BUCKET")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" hasura"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("backend"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("plus\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("S3_ACCESS_KEY_ID")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" minio_access_key\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("S3_SECRET_ACCESS_KEY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'${S3_SECRET_ACCESS_KEY:?S3_SECRET_ACCESS_KEY}'")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("minio")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" minio/minio\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("restart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" always\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("S3_BUCKET")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" hasura"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("backend"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("plus\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("MINIO_ACCESS_KEY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" minio_access_key\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("MINIO_SECRET_KEY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'${S3_SECRET_ACCESS_KEY:?S3_SECRET_ACCESS_KEY}'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## min 8 character")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("entrypoint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" sh\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("command")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"-c 'mkdir -p /export/hasura-backend-plus && /usr/bin/minio server /export'\"")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'minio_data:/data'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("db_data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("minio_data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br")])]),a("p",[a("strong",[s._v("Note:")]),s._v(" Create a directory called "),a("code",[s._v("custom")]),s._v(" in the same folder as your "),a("code",[s._v("docker-compose.yaml")]),s._v(" file to customize Hasura Backend Plus.")]),s._v(" "),a("p",[s._v("Then start the services:")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("HASURA_GRAPHQL_ADMIN_SECRET")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("your Hasura Admin secret"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("S3_SECRET_ACCESS_KEY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("your Minio access key"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\ndocker-compose up -d\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("Everything should be up and running. HBP is listening to "),a("code",[s._v("http://localhost:3000")]),s._v(", Hasura Graphql Engine is listening to "),a("code",[s._v("http://localhost:8080")]),s._v(".")]),s._v(" "),a("p",[s._v("You can then run the Hasura Console in following the "),a("a",{attrs:{href:"https://hasura.io/docs/1.0/graphql/manual/hasura-cli/hasura_console.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("official instructions"),a("OutboundLink")],1),s._v(".")]),s._v(" "),a("h3",{attrs:{id:"standalone"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#standalone"}},[s._v("#")]),s._v(" Standalone")]),s._v(" "),a("p",[s._v("You can also install HBP without any other service, and connect it to an existing Hasura server, and/or an S3 instance if you plan to use the storage features.\nThe easiest way is to pull and run a Docker container, but you can also run the service from the source code.")]),s._v(" "),a("p",[s._v("You will also need to make sure the HBP migrations and metadata are loaded in your Hasura instance, either in using the "),a("code",[s._v("AUTO_MIGRATE=true")]),s._v(" environment variable, or in loading the migrations manually. Please see the "),a("RouterLink",{attrs:{to:"/configuration.html#migrations"}},[s._v("related configuration chapter")]),s._v(" for further details.")],1),s._v(" "),a("h4",{attrs:{id:"using-docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-docker"}},[s._v("#")]),s._v(" Using Docker")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("docker run -d -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3000")]),s._v(":3000 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -e "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"HASURA_ENDPOINT=<your Hasura graphql endpoint>"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -e "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"HASURA_GRAPHQL_ADMIN_SECRET=<your Hasura admin secret>"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -e "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"JWT_KEY=<your JWT RSA256 key>"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  nhost/hasura-backend-plus:latest\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),s._v(" "),a("h4",{attrs:{id:"from-the-source-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#from-the-source-code"}},[s._v("#")]),s._v(" From the source code")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/nhost/hasura-backend-plus.git\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" hasura-backend-plus\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" .env.example .env\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" build\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" start\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"registration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#registration"}},[s._v("#")]),s._v(" Registration")]),s._v(" "),a("p",[s._v("By default, anyone can register with an email address and a password:")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -d "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{"email":"real@emailadress.com", "password":"StrongPasswordNot1234"}\'')]),s._v(" -H "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Content-Type: application/json"')]),s._v(" -X POST http://localhost:3000/auth/register`\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("You can add some safeguards and limitations to the registration process like email verification, constraints on emails and passwords, or setting additional registration fields from your custom database schema. More information is available in the "),a("RouterLink",{attrs:{to:"/configuration.html#registration"}},[s._v("registration configuration chapter")]),s._v(".")],1),s._v(" "),a("h2",{attrs:{id:"login"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#login"}},[s._v("#")]),s._v(" Login")]),s._v(" "),a("p",[s._v("Once an user is registered, they can connect to HBP with the "),a("code",[s._v("/auth/login")]),s._v(" endpoint:")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -d "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{"email":"real@emailadress.com", "password":"StrongPasswordNot1234"}\'')]),s._v(" -H "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Content-Type: application/json"')]),s._v(" -X POST http://localhost:3000/auth/login`\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("It will return the following payload:")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"jwt_token"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<the user Hasura-compatible JWT>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"jwt_expires_in"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<the number of milliseconds of validity of the JWT>"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("You'll find more details about how HBP handles the session and JWT in the "),a("a",{attrs:{href:"#jwt"}},[s._v("JWT section")]),s._v(".")]),s._v(" "),a("h2",{attrs:{id:"multi-factor-authentication"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multi-factor-authentication"}},[s._v("#")]),s._v(" Multi-Factor Authentication")]),s._v(" "),a("p",[s._v("By default, any authenticted user can decide to add "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Time-based_One-time_Password_algorithm",target:"_blank",rel:"noopener noreferrer"}},[s._v("TOTP"),a("OutboundLink")],1),s._v(" multi-factor authentication (MFA). It will require the user to get a generator such as "),a("a",{attrs:{href:"https://authy.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Authy"),a("OutboundLink")],1),s._v(" or "),a("a",{attrs:{href:"https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en",target:"_blank",rel:"noopener noreferrer"}},[s._v("Google Authenticator"),a("OutboundLink")],1),s._v(".")]),s._v(" "),a("h3",{attrs:{id:"generate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#generate"}},[s._v("#")]),s._v(" Generate")]),s._v(" "),a("p",[s._v("The first step to activate MFA is to generate a secret through the "),a("code",[s._v("/auth/mfa/generate")]),s._v(" POST endpoint:")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -H "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Content-Type: application/json"')]),s._v(" -X POST http://localhost:3000/auth/mfa/generate`\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("It will return the following payload:")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"otp_secret"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<the otp secret>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"image_url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<the base64-encoded QR Code png image>"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("The client now goes to its favorite MFA app (e.g. Google Authenticator) and enters its secret either manually or in using the QR-code generated by the server.")]),s._v(" "),a("h3",{attrs:{id:"enable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enable"}},[s._v("#")]),s._v(" Enable")]),s._v(" "),a("p",[s._v("Once the user fetched their OTP secret, they must generate a verification code and send it to HBP to complete the activation or MFA. The code is send to the "),a("code",[s._v("/auth/mfa/enable")]),s._v(" POST endpoint:")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -d "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{"code":"<verification-code>"}\'')]),s._v(" -H "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Content-Type: application/json"')]),s._v(" -X POST http://localhost:3000/auth/mfa/enable`\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("The server should return a "),a("code",[s._v("204")]),s._v(" HTTP code. The user login will now have an additional step as explained in the following section.")]),s._v(" "),a("h3",{attrs:{id:"login-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#login-2"}},[s._v("#")]),s._v(" Login")]),s._v(" "),a("p",[s._v("When an user enabled MFA, they still send their user/email credentials to "),a("code",[s._v("/auth/login")]),s._v(", but the payload will now become:")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"mfa"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"ticket"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<an automatically one-time only generated ticket>"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("The next step to finish the authentication is to send back the ticket with the verification code from your favorite MFA app to "),a("code",[s._v("/auth/mfa/totp")]),s._v(":")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -d "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{"ticket":"<generated-ticket>", code":"<verification-code>"}\'')]),s._v(" -H "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Content-Type: application/json"')]),s._v(" -X POST http://localhost:3000/auth/mfa/totp`\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("The HBP session is then opened with the client, and the JWT is sent back as the payload:")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"jwt_token"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<the user Hasura-compatible JWT>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"jwt_expires_in"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<the number of milliseconds of validity of the JWT>"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"disable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#disable"}},[s._v("#")]),s._v(" Disable")]),s._v(" "),a("h2",{attrs:{id:"jwt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jwt"}},[s._v("#")]),s._v(" JWT")]),s._v(" "),a("p",[s._v("When the user logs in, HBP sets an HTTP-Only cookie to store session information and a refresh token.")]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),a("p",[s._v("Never store a JWT in the local storage of the browser as it is prone to XSS attacks! Keep a short expiration period instead, and get a refreshed JWT through HBP.")])]),s._v(" "),a("p",[s._v("The "),a("code",[s._v("jwt_expires_in")]),s._v(" indicates the maximum frequency in which the browser will need to refresh the JWT.")]),s._v(" "),a("p",[s._v("You can get a refreshed JWT throught the "),a("code",[s._v("/auth/token/refresh")]),s._v(" GET endpoint:")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -H "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Content-Type: application/json"')]),s._v(" http://localhost:3000/auth/token/refresh`\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("It will return the same kind of payload as in "),a("code",[s._v("/auth/login")]),s._v(", with a new JWT:")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"jwt_token"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<the user Hasura-compatible JWT>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"jwt_expires_in"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<the number of milliseconds of validity of the JWT>"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"enable-an-oauth-provider"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enable-an-oauth-provider"}},[s._v("#")]),s._v(" Enable an OAuth provider")]),s._v(" "),a("h3",{attrs:{id:"backend"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backend"}},[s._v("#")]),s._v(" Backend")]),s._v(" "),a("p",[s._v("Set the necessary environment variables on "),a("code",[s._v("docker-compose.yaml")]),s._v(" under the "),a("code",[s._v("hasura-backend-plus")]),s._v(" section. The OAuth Providers section from "),a("code",[s._v(".env.example")]),s._v(" has a list of the supported providers and options. Make sure to set also the "),a("code",[s._v("PROVIDER_SUCCESS_REDIRECT")]),s._v(" and "),a("code",[s._v("PROVIDER_FAILURE_REDIRECT")]),s._v(" URLs to the frontend.")]),s._v(" "),a("h3",{attrs:{id:"frontend"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frontend"}},[s._v("#")]),s._v(" Frontend")]),s._v(" "),a("p",[s._v("For OAuth login, redirect the user to "),a("code",[s._v("//hasura-backend-plus/auth/providers/{provider}")]),s._v(" to perform the authentication. Upon success, the URL set in "),a("code",[s._v("PROVIDER_SUCCESS_REDIRECT")]),s._v(" will be called back, with a "),a("code",[s._v("refresh_token")]),s._v(" query parameter. Use this value to perform a GET on "),a("code",[s._v("//hasura-backend-plus/auth/token/refresh?refresh_token={refresh_token}")]),s._v(" to obtain the response which contains the valid JWT.")]),s._v(" "),a("h2",{attrs:{id:"change-email"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#change-email"}},[s._v("#")]),s._v(" Change email")]),s._v(" "),a("h2",{attrs:{id:"reset-password"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reset-password"}},[s._v("#")]),s._v(" Reset password")]),s._v(" "),a("h2",{attrs:{id:"unregister"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unregister"}},[s._v("#")]),s._v(" Unregister")]),s._v(" "),a("h2",{attrs:{id:"logout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logout"}},[s._v("#")]),s._v(" Logout")])])}),[],!1,null,null,null);t.default=n.exports}}]);