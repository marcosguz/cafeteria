<h1 align="center">Cafeteria App</h1>

```scss
@use 'base/variables' as v;
@use 'base/mixins' as m;

.nav-principal {
    display: flex;
    flex-direction: column;
    margin-top: 5rem;

    @include m.tablet {
        flex-direction: row;
        gap: 1rem;
        margin-top: 0;
    }

    a {
        color: v.$blanco;
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 1rem;
        text-transform: uppercase;
        text-align: center;

        @include m.tablet {
            margin-bottom: 0;
        }

        &:hover {
            color: v.$secundario;
        }

        &.activo {
            color: v.$secundario;
        }
    }
}
```
## About the project
<table width="100%">
    <tbody width="100%">
        <tr>
            <td rowspan=5 align="rigth">
                <img src="https://github.com/marcosguz/cafeteria/assets/75583218/b053660d-5fb3-4222-a7d4-4dfc1f27a181" width="500px">
            </td>
        </tr>
        <tr>
            <td align="justify">This web application is developed for educational purposes to implement preprocessor code.</td>
        </tr>
        <tr>
            <td align="justify">
				<a href="https://cafeteria-app.netlify.app/">Cafeteria App</a>
			</td>
        </tr>
    </tbody>
</table>

## Developed with
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![SASS Badge](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)

## How to contribute?
Contributions are what make the open source community an amazing place to learn, inspire, and create. Any contribution you make is greatly appreciated.

1. Fork the project.
2. Create a feature branch: (git checkout -b features/amazing-feature).
3. Commit your changes: (git commit -m 'Add an Amazing Feature').
4. Upload your changes to the branch: (features/amazing-feature)
5. Open a pull request

## License
Distributed under the MIT license. See the `LICENSE` file for more information.

## Contact
Marcos Guzmán

<a href="https://www.linkedin.com/in/marcos-guzman-nazareno" target="blank">
      <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="Marcos"/>
</a>
<a href="https://twitter.com/marccosgz" target="blank">
      <img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" />
</a>

## Recognitions
- [Sass](https://github.com/sass/sass)
- [Marked](https://marked.js.org/)
