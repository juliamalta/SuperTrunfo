var carta1 = {
  nome: "Luke Skywalker",
  imagem:
    "https://media.contentapi.ea.com/content/dam/star-wars-battlefront-2/images/2019/08/swbf2-refresh-hero-large-heroes-page-luke-skywalker-16x9-xl.jpg.adapt.crop1x1.320w.jpg",
  atributos: {
    ataque: 7,
    defesa: 8,
    força: 6
  }
};

var carta2 = {
  nome: "Darth Vader",
  imagem:
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIREREPEBERERESEhIRERIREREPEQ8RGBQZGRgUGBgcIS4lHB4tHxgYJ0YmKy8xNTU1GiQ7QDszPy40NTQBDAwMEA8QGhISGjQkISQ0NDQ0NDE0MTE0NDExMTQ0NDY0NTQ0NDQ0NDExMTQ0MTE0NDQ0NTE0NDE0NDQ0NDQxMf/AABEIALEBHAMBIgACEQEDEQH/xAAbAAADAAMBAQAAAAAAAAAAAAAAAQIDBAUGB//EAEIQAAIBAgMFBQYDBAcJAAAAAAECAAMRBBIhBQYxQVETImFxgRQyUpGxwUKh8AeCstEjNHJzkrPxFTNTYnSDk6Lh/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECAwQF/8QAJhEBAQACAgIBAwQDAAAAAAAAAAECESExA0ESUbHBYZHR4RMiMv/aAAwDAQACEQMRAD8A+NwhCAQhCAQhCAQhCAQhCARrFAQN7ZmAqYmqtGnbM2Y3Y5VAVSxueWimZdoYAUqVB7Or1O0Do4y2KsACBxF78D0nTFTD0kV6IqKamDRFctpTxRV0rGw117wHQPeaddjUw1mJZ8PVNS7NdmpVQinjqcrqv/kmkcm0do7QgK0doWjtAVoR2haArQtHaFoCtC0dorQFaK0q0LQItCXaK0CYRkRWgEUcICilRQFCOKRShCEgIQhAIQhAIQhAIQhAJdNsrA2BsQcpvlax4G3KTCVHa2ziaDM3stKpRpuwdkqVM+R7e4psO6MzDUknQ6cJpYWsVuQoYFWRgb5SrCxvb9XsZ6DbNDtcFh9o06KrmHs+LyrlVa4vlrFeFqi63AADK3hPLo9r+UUbL0VDWLWF+oIPkekmoaZUZFYNc3JN1K8gBxv+vLPjtmtSTDVGZXXEUu2RlN1FqjIy3+IFdRyuJqWlCmahhajgmnTqOBxKI7geZA8DPQ7C2OoojF1U7QsSKNMgstgxUuw56htOik8xY25iqtDEGnSxi4pFRnpVKRyo2dwoACnTha3nGx5ga8IWnrLUqyMmKTVl7mIUDtaDjgT8adVPLUEEa+bxeGek7UqilXRirqeRH2535giINe0LSrQlEwtKtC0CbRWlWhaBMUq0LSCYER2igSRFLiIgTCBEUAhHFAmEITKiEIQCEIQCEI5UEIRwFCO0DKPYYjHvgcPTpoKbrjtnIlanVVnUIzMysoBFmBbMDyM8aTynp98kJegg92hhcNQ8SUpLdvW4+U80VsIpHdw1Vq2znpsbnBVkq078Vo1yUqAeGcUT+8ZywJu7NptTwuKqkHJWSnhVPVu3p1ifICiRfqRNJ2spPoPX/wCXidD0WEr1cW1KhSNRKFCgqHIruzKoCu5VDma7H3Rytx1nMXDioyU0FVqhARaaWqOWzs1strjS3Dnrzl7Dd1Uuo7lNx2hNRlDKdRTCXsQSCTcHhy0B2qG1UapSBREyXyvTUqx4m976EBuVuHjINrF4CthaqYbFEUw4W1RmUimrGwLEcrgg34WJBsDL/aJRZMcpqLlrNhcMa6g3HbqnZuQeY7g158ZxN4toVKtVi7u+mQFzmY00bum/nm16WnS3jxjYqjs7GsczHDHB1Te57bDudWPU06lI+plnY4EI7QtKFaK0q0IE2haOECbRWlQtAi0JVooExSopAiJJEq0CIEQjIkwJhCEyohCEAjhCVBHCOUKOELQCFowJQED226+zV2nh8SaxqNiMKKSoVYBqlNgwUH4ipS1+jAeI8xtHAVcMxR6LJmIsXBJF7EDha/8AOdDczbJwWLWoWtTdTTqi5F1PeXUDSzqv5g6Eyd7Nse04lnAsoIUXfOlhorBRcDu5dATwl9J7beBw61sFWormNUNSqgi+Ws6Uq79kBa9hTV7W4sR1vPN1lvYfhC5r9SfHyAm/srFdnVpZmcBKmclSbFCCGa39kW9Zr42tnqVHWyszliBwY/i04WuC3Dn4Relnatm53V8Ouq2arYAAkqNQW4nTlwvML3QBrLb8JDX1AFtPQTEapGtshvbunKQfLkNZ09jbOp4jumpkZbixGYNoSthoeNgfDXwmRr7cr0XqhqAqBQqqxqZRdgLEqo91egv8pk2dic2GrYUnVXTFUtRbMqstRR5owb/tzQxlE02yMpVgO8CQSCeUnC6Otr8dfLn8xp6xFbFoWjtC02hQtHC0gVorRwtAUUqKBMUqFoE2haWFmRUkrWOO2HLEUnRw2FLmwE6W093q1CmlWojIlQXQn8Ux8o6zw3W3mSJOWbFVLTDNOVmmCEISII4QlQRwjlBCEoCAgJQELR2gK0do7R2gOmQGUt7oZS1uOW+tvSRj6BpVqtIm5p1Hpk8zlYrf8pVpubxowq03b3quGwtUn4i1BLt6kE+d4pHNZiddBy0526+MulU7wPEWYa87rYj85rxqZFdmlSWpkVuDjLfmCRZT/iyzLsrBK4ZG7lWmcyOo95ToQRzsfrOfh6rIAy94Ag5TyIN9DOthcUpqiol8jMQQdCAw1U+tpBrNhO0eohDdsgzElmNMopsxZjfKvCzEgDgZe0dmHDlCpD0aq56FVfdqpzB6OpNip1B6ggnu7HxaYfaTPUp9rSfDYlKlO4HaKaDDJr1YD5zh4eu1Gm9Jg1bCMQaiEgPQqWIFVD+FuOvBgcp4yy6SxpWhaZqtILYqwdG1RwLBx5fhYc15eIIJx2m2U2itKtC0CbRSrQtAmK0q0VoaK0YWUFmVEmbVxx2lEm7hsKWIAErDYYsQAJ9I3S3ZSmntmLstJBmAbTMROeWT2+PxTXyy6Turu1To0/bcZZaajMitxc8tJ53fTeNsW/w00utNRwCzd3x3nbEPkTu0l0RRoLdTPB4h7m5mZNunkymM/X7NaqZrzM5mKdXz8ry144o4ZEcI5QQhKAgAEYgIxAAJQEAIwJQAR2jtCAjoL9J0t8rriUoG18PhcHh2t/xEw6Zx6MWHpNrdDZwxONoIwvTQmvW6dlT7xU+DEKv705e8lRmxeIdzd3q1GY+JdpLONpLzpypdNbkDrJUSm0P0kaZaJKNlPPSZqDFXuujBwddVIF2Fx6THiFuFceF5mppcsQNSO6eVyAPqYG4mND16bsBTtcG5JUKVOt+l5gqV1FOsuYXYKAAfes4P2vO3s5cNUqUkqr2tPNULolU02yBWawzCym/CzWNrW1BnncRTUEheBswvxFxcD5ETEy3dN5YXHV9X2WCxWS6sC9NveUGxB5Mp5MOvobgzcq0wDowZSMyOBYOvW3I8QRyIInGm5hsRl7re6TfrlPxD5C/X0E6Y3TnY2rQtKI/Q1BHURTbKYrS4rSCbRhZQWZESStY47JKc3MNhyxAAjw9AsQAJ9C3P3XBHtGI7tFe8S2me32nLKvb4vFP+sumTc/ddcvtWJ7lFO93tM1vtNDfLeg1z2VLu0U0VRpe3MzNvjvR2n9BR7tFdFA0zW5z59iaxJJMxJt3zz+PPv1PojEVrm5mk7SqjzCxnaR4M891LGRKMU05NeEI5kAjhAShgShEJQgAlAQEYlDAjhGBAAI7QAgTYX6awPpP7NtninhMTjWGtV+wQnlTpgO5HgXZR+5Pl2Oq9pVqVPidmHkTpPr226v8As/ZFLDDu1EwwVrcq9W7P8mZvlPjbTWfGMjGHNtIG0yVXzW68/HSYhLVbn8py26NrDtmRkPSXRqhNSCTdCAOeUgn6CevCbMekiVaeJoVkw7AuArpWxGmViDqq2voLcRPNY6hTTKFDEZnGYFSrJlUowAuVbvXIPC9uIMku0xu2MJSdRkfI9jdandXTo4+/OalY95vAlf8ACpH2jrBb903PEnUBh4g8D9ZhLd09SYk03llawwEysndB8uY+kxSsujgauYCmeP4D4/D68vHzmecgGdejV7Rcx98e/wD8w+P+fjrz01jfTNgtGFjCzKiTVMZtKJNuhQJIAlUKJJtPc7obsdse1qd2iupJ0vbkJyyye3xeL3el7n7rdp/T1u5RXVidM1uQmTfDegMPZsP3aK6ALpnt9pk3u3mXL7Lhu7RXu93TNb7T51ia5YkkzEm3oyymM379T6f2jE1yxJM0ajyqjzAxnaY6eDPO2pYyJRiMrkkxSjFA1YxCOQEpRJEoQGJQiEoShiUIhKEAAjAgIxAAJ2N1tnjE47C0WF0NQPU0uDSpg1HB81Qj1nJAnsNwUFP2vGNpkpLQQ8i9VszHzC07fvzWM3dM5XUtZf2kbRzhlvqzi/zuZ84adveXFmpV1OlyZxDJ5bvI8c1iUpb30veTMlLS5nNtvJtDEBcnaMykHuscwsOl+EwV67MFJUcDwluO5TP61AmFzy/XGXS7b9ZMMaAZKjGqFTNTZSpB0DBTqCOJv0HATXXAsabVACQmUubiyqxCg28yB6zRmy+Ia2W5A4EDQML3F/UCZu0vM4SiXU6i+th9ZgItMlJtdfE/lCutmIla1xtiE28MxBBHETXQTaw6SVccd11VS4DAaHQj4W6fr+c2aNG5tMux6AY5SLqwswHG3UeI4/oz2e7u6b1Kln0prZi9rKy8iP5ctZLnw9GHh1d3pG6O7BxDZ37tJdXY6egnU3s3jSmvsmFstNRlYrpmMyb0bwpRT2PC2VFGVmXmek+bYrEFiSTMyfJ3yymM3+0/NRisQWJJM0KjyqjzAxnaY6eHPO2pYzGZRkmacdpMDGYjIqYpRigaojgISBrKEQlCAxKEQlCUMShEIxAYlCIShKyBPY0G7DZlFeDV3q4hupBbs19MtMH96ePJsCeOnDrPS73VezKYZTcYelToeZRArH1IJ9ZvDi7Zy51HkMc+aoTNUzI5uTMc45XddJ0QmYaJ5zCJnf3REVsj/dr6fSazfr5zYQ9weQmsx4esVYxCZK2tj4SWFjxB8ReOpwEiycVAm5QoA+9c34AHgbcz8ppibeHq6+Uzlv0145LeQcOVbKZvYWlcgTYqUw6hh7336T0+6W7T4p10so1dzwUTPy4evDxavPTf3N3eeu4NrIurMeAE9vtbaFNabYLDOEOXKKl9C3QnoeF+V5zNv7cpYOl7FhCBYWdxxJ5i88RT2kQ1ydLzHPp7JhMucuJ6n5rn7QqvnZXBVlYqynirDiDOZUeeq2thhi07WnriEXVRxr0wOHi4HDqNOk8czXnow1Zw+Z57ljlZUsZJjMRm3l2kyTKMRhEmSZRkmAjFKMmRprQEIxIGJQiEoQKEoSRKEoYlCIRiBQlCSJQlZb+xKHaYrDIeBrU8/wDYVgzf+oaY9vYo1a9RyblnY/M3m5u4AK7VCbdlQrv6lDTH51BOJiXu7eZm+sU9tE8TIlvxknpONdCEz1eAmHpMtU6CBkR+7aYqg09Y0OkbcPWFYZbHQSDKJ0mVnVTMlPiLSFF5mTusD0IMVcZ7e33Q2RTrVlp4h1W2RimuUXYCztpbQ3sDfyn0Heja9HZtP2PCZVdlzMRxAP3nyjA7Y7Gg9NcpLNnBZWzrUtbMrqfh5eJ6mc/EY93OZmJbqTcznI9v+TGa+38utjcUXJa978ZqCtNdMRcSC83MdJl5rbt1sJtBqZBB0mbamHTEA4iiAKmrVqY/HzNRB15kevWcLtZkw+LamwZSRYggg2IPWWf63cY8mUzx1WOIzqYiitZTVpABwC1SmugYc3QfVfUaXA5k6y7eHLG43VSZJlGSYRJiMZiMBGTKMUjTVjWKNZBQlCSJQgUJQiEoShiUJIlCGVCUJIlCUdPZj5KeIfmRSpejuXP+UJwsSe83mZ2ENsMx5vXW/kiG3+YZx8UO8fHWXLonbWaVWWxHiqt53UE/neSZnxC3pUm6Z6fqrBvpUHynOtNZeMyOdBMQlMYimplMdPWQsZ4QpGKKOQiqfGbOS81lm1Ra4ma648zTEQeEyU2tof8ASZyvOBphvA/WJT4/Riz2PhLzXkMltDI1EqcxkLQLSCZN5qJts4bFsjBlJFiCCDYgjmJ1KiLiAXpACrxqU1FhU6sg+LqvPl0nAJl0sQyG4NrSzhnLnttyTOgrpihmBVK/E3IVK3meCv48DztqZo1EKsVYFWU2ZSLEHoRNb256YzEZRkmEIxRmKRpqxrCEgoShCECxGIQlFCUIQhlQlCEJRuH+rr/fVP4Kc5eM4jyhCWkajTaf+qp/f1P4EhCc600hGYQiKBKbhCEiohCEIqZ6HCEJK6Y9tunBYQmXVVflNapCEsZyRJbjCE1HOkZLQhNM1sbP98eYnb2979H/AKen/E8ISztn05JiMISskYoQkaf/2Q==",
  atributos: {
    ataque: 9,
    defesa: 8,
    força: 2
  }
};

var carta3 = {
  nome: "Ray",
  imagem:
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgWFhUYGBgaHBoaHBocGhgYGBwaGhwdGhoaGhgcIS4lHB4rIRoaJjgmKy8xNTU1HCQ7QDs0Py40NTEBDAwMEA8QHxISHjQrJCE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDE0NDQ0NDQ0NDQ0NDQ0NP/AABEIASwAqAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAACAQMEBQYAB//EAD0QAAEDAgMFBgQEBQQCAwAAAAEAAhEDIQQSMQUiQVFxBmGBkbHBMnKh8BNCUtEjM2Lh8QcUgrKiwhY0g//EABoBAAIDAQEAAAAAAAAAAAAAAAIDAQQFAAb/xAAqEQADAAEDAwIGAgMAAAAAAAAAAQIRAxIhBDFBIjMTI1FhcYEUMjSx0f/aAAwDAQACEQMRAD8AxRK5q4lICtFFGhwBK1AHJxpRAZChG0IQE40rjmwwE41NNTjVJGQwiQtRwpJTElIHJSEsKGMkVxQlCSklAc2EClCQIlwqhCUrTddK4ahGhVI9B7B/E75fcLU7f/kVOiy3YP4j8vuFqNv/AMh/RVdT3V+g9D/Hr9njG0Hb56rkm0PjK5aJSh8FNlSEIgihVcGrgEBEF0ImqULaFanWIGpxoU4ICCVq4IlOAA2lKChDkoXBINi5yGUsoWNliZUITiEhQDTCASrpXKUL7nBqVouklc0qSKXDPQOwR3nfL7harb38h/RZLsCd8/L7ha7bg/gv6Ktq+6v0R0zz0tfs8X2kN49VyPaQ3z1XLVwZ+k/SUSMNQSiYVTNoIhKAhzLpXAscCNqbBRtKJCW2OgJQEDXI2lEQGwJYXBKAoDRxC5oRAJYQMJ1wIClSFKVGBDoVdC4BKV2A5AIQtN0TkLBdSTS9J6D2AbvOP9PuFrtt/wAl/RZTsH8Tvl9wtbtofwX9FW1PdX6B6dL+PSX3PGdpjfPVcnNpN3yuWuuxmwuDOhcSuGibcqTNldhcyJhTKNrlyQLY+CnAUw1yeplEkA0xwORtQlK1dkjayQEsJtrkWZc2dkMBEhaUSBgVRwalIShcSuSEbuQAjiUgRtROR00CWIGtupUJtwuhXcK69JuuwfxH5fcLYbWE0X/KVj+wh3j8vuFtNpj+E/5T6Krq+4gum56ev2eM7Sbvlcntot3z1XLYnsZ2kvSZEIXhLKB6qGmhAUsoQoz8VckDdFpkCT3dyCqUrLGTDp8E5mqltsqjDbWAMFtus/3VniHnJnZBB58NDolfyJ8ob8F+B8BG1qYwVcOJabERfnadFKCZFKnwI1E57i5UQauBRgBE3yKp8CBEEQYlhQV7s6EhStCEqULTElG1AEbUfgnOBxspE8wJvLdD5Ct+k2/YUb5+U+oW32gP4TvlKxnYpkO/4+4W0x38t3ylU9b3C30kuenpP7/6PItpM3yuT+0Wb56pVry+DO009pgJSFciKqmqkRcY4hjiDBj1Kp6tYugCzQFfVaGdpbMTaeAVQ/COzZSIDQZ74MesfVVNf+yLOlxI3Qe1vAnwt5qWNquALWZWNtY7xPffio0SY4TpFre6RlAHjxSQ8huxILTmu6RB0jme/hCvdk44OY1rnAvuLm5E2+io/wAGD796Bwbroe79kzTpy8oXSVLBtQwjUI2BZ3C1nObL3va4EfDFhpcceFpV5g6pMNcWk8HDRw9ndysLUy+UUtfTpL08koBHCAFKCiM9ilNuRldCKUSNtajDUbWow1NJyNsJTjdUQau4oGiOTd9idT8vuFscd/Ld8p9Fjew4uenuFssaNx3yn0VLX9w1On9h/s8vxw3z1XLsYd89Vy05rgzY7HncJYXBFCq5NVIEKt2lXh5OhMCeca+dlaFkgjnYdSs5jKsuPcYVfWrLwOhcAOrJBUQAI2UCfhEpIeEPB50PG6JhDnADideUpG0XQO4x/bwU7B4aAXhsuboP6uffzU5IFwrMr4J0MfYVpjBkIINpFx9+Czj3PaTMg8Z5pz/duLYJ5ffqmRX1FVDZtcLXFRuaRmET3g6O66g+Cfa0LMbAxWaqxhsHHIT3O438/BanLklp1BIPUWVmeTM6jT2V+QMqRy5xkpCUyZEBsTgCbphSGtTcBeDmtXFlwnWtSgXQ1J2Ta9ixc9PcLXY47jvlPosr2PbHl7hanHjcd0Pos/X9w09H2H+zzDFjfK5FiRvlKtAzI7HnaJqFN4gHK4N1IgRcybQO9VqfBsHY14ySDzIjm249FnKrpc48yT5q2xoe2nTc5pYRLSHAgxeN08IJ1VQG5uInlzVPO55HJYFFM8OF591cbHwYeZmD+Zpn/IUHB0ri+vkf7Le9n9ksJD3CSLCZkDgO8IapJBSnTLDAbAY9gzNknjFz159VOodl2sOZtvD2WjwtINAEKY+MpSdzGuUZTaPZ2lUBlgmOEBZXa3Yzd3LQZNtZXoNZ14RNgoptoCoT5PMdkdmKgqAhptfyCttsiKru/KZ5y0GV6PsjDNLxZYDtXTDcTUaPykD/AMQtHpry8GV1kPGStY5PNCjMKktV1IoIeYFIY1M0wptFqnaHLycxiL8K6mMpo/wLrk15Jc5NJ2SF/BarFiWO+U+izXZdkO8FpMYNx3QrM6n3TU6dfKx+TzTGN3yuUrH0t4rloz2MxRt4PLwFJwBcCS2zg3dPIlzWz5EpmFN2OB+K0HQh0+DSfZUNT+r/AAa8NKln6oPtTQqVKIDxmey4eBaOLTyPFYuhhpMZSb9PsLeU9nVKjy51Vw3yAwSZ5FwFog8VVY3BtZiXQJFNpJj8z4mP+vmqEXhYLmrOXka2XsYvqxBDGAAnmYk+seC3uzsPkAAUDYmGyUgTqZJPO5v7qTWxT2nca0xzdHsgqtzJmVKNNTqQAlqYmyx3/wAsDHZatNzB+oEOarXDbYpPEse0jrddtaOymT3Pm6Vj+9Q34pp0TYxDeaYpAbNXsB0v6Lzztc8OxdYj9ZHkI9ltOz+0Gg3cBPA2mOHevN8fXL3vefzOc7zMrQ6SPU39jK6us8fcBgUmmozXJ+mVoJFEmUlPohQaQVhhkT7A9iZTJU+gJsiw1CQpLcPBSapDZbXJdbAZDvBXmJG6ehVVsVsHwVxVFj0WXrP5hp9P7ZjcVh5JXKxr07rlcnUeCjXc8QLUtGuGODjZrSC4nSJg/SVJNFZralV2Z4uW2aOkh2nUBI1HtWPqXNP1V+D0d9PKARmdYkRZpGsHuGsrPQQxjjrUqFzj/Tnn6kt803SqVG0xQD3yzJIPFhAJAOo4jwVlWw4FJo/SAB4EO9lnYwzT3bi72I4Oo0/kbPkF209l52kBxbPERP1UTYVXK0sP5HEf8TvN+hWkpuDgh7MPGUeWVuzj84ZneRIlxeBA0IynvvM6cCVHpbJc2o9jC5wBhr27p8QF6LtDZTH6ieMKVsXZDGS6OnFOnU4K708PuZrAYWsxm+SRzKpMftx7n5KJkzEgRflJ9l6btbCB1LKBEgwsFsnY+/nacjtQ4AGO8A2lO08Plir9LwhzAYOrTD6mIY8PYAWEkuYS6wIcBl8JmygOctj2hIp4VlMEuL3S5x+JxEuc4+LgsiGrT6efTkyteluOYVIYUDGKRTYrSRVqh6lKssNKhUWK0wzFzQuqLfAVirvDjMqbB01fYZqp6vAyKb7lns6nBVk7RQ8IFNOizNR5rJsdOvQU1endIpWJC5WJrgpXwzw4qHgOzv49YDOA3M0vaQYc1pvBGhNh/wApViGqzw9ZlCm9xMPcwnWDEGL8JN/AJmvKU5Z3SatVeJMztN7mV3Om5df3Gg4eyvcNiBVw+fiJa4d7b/X3WMxOPzcyTJ8BYEjmeXRWOw9pZZY6wd38dB6+io1PGTX06xRpsO2HtcDZ7R5t1+hHkr+g8wqLDVAWNI1b6GD7q8oXCrMuT2Dq17XUnZ1bM0nQAqP+G3jB90xj9kisBvvZH6HFs9YRSDRo6rQ5rL2kX11WM2fTLXZYuCR4ixTTTiKbCWPcQ06PJMtkgO7zI49yeo1XU6D6zvjdutJ1zuNz6u8Fd0Yb4+pn9RST/BX9osdneGA7rBlB5n8x87eCpQ5I8pIWxC2rCMmlue5khjlIY9QWKQx6NMW5LGi9WOHeqak5TqL1zE1Jo8JWCvcJXCyGGqK5wtdI1IyDNYNlg6m6TyhSzWEcpVPg3/wHHp6pWVXOLRYgnv4a+qzKjNP7Gtp6zmEl5Q5i61yuUDH1IcRouVnT0/SUdXUe5nj2Lxz5OSGgcwSfMiFVY973kl5zA6m3tZXGYEcwdeI75B/fmmHYXKCWiW3JGpvZVHVV/ZmzGnGmsSsGTrMcwybg8UbanEa+kcSrqvgQ4WEtd0VBWomm/KdOB5hQGuTVbD2w2cjjcCL2zDgVssNi5bbivJ3Uyd5tiPBabs/2myQytbk/h48ki9Pyixp6vhmtq4ao9wf/ALhzIPwtDSI78w1VZtHD4wGWYvOD+V4y/VphXAqsqAQ8dQZVbjcCG3ZUc48lGn3GU0kQ9lVMbDnPax7SPwzv3EmxDb8eil7dxmfIwHdpiOruJ8IA81KqOLKYZaSLx+WfUnmqOsFs9No7VuZidTrqqcojOCFG5qQhWiujgU4wppE165M5ol03KXSeq5jlJpvUirktqL1ZYasqCnWVtsum6o9rGmC45ZuYmZdbkJPghppJtivhuqSXk12x8aH4eu0fki/OSY9FP2bUmPmKqcPSpYelWa15cXwyXFvxCQIAGlz5KZhXlolozGS4cBf1WdWHua7P/hpzpUlKxyiLtOvvvHIn9/dcjxOznVJeDlcbwfh8Dw+q5P09SFK5Ket0mvVt4MEzs6yPjf3zk/8AVoQv7O1W3pVQ7+l9vrcK0o1VNovWMro9JWnL8GQdhi0llRhY8xrZrjEjKdOGnoqLEYMVQWOgPHwm8gxcO7rL1k5HNyva1zeTgCProqHauysO57HUpa8WP5mFvIkmQR4+ifNbitc7eUeYYRjmvLHCCLEEafup2IwQIDh5Kf2m2Q+jVFSN14FxcEi3nET39UOGAcAIJ8yPPTl9EeAG/JW4ahVAP4TnBzRmyid5upgcwL9/kpGyNuVA9pc4uEiRYEieBgpcVW/ABcww54LG2jKLZnRz0g/1dyTsngBUqSRLWDN4ggj77yiic2ku511iG32NjUq5gDzAPndQ6jFYPoEqNUpLb8Hn03kr3MTLmqwNFMvooGPmmQiEgT7qabLFAe45pTrXpklE0qUznySmPWh7M1HZ3hph2TumC9jSb9xKzLXK47PV8lQunVrGx/8Aqw/fVL1n8tjNCfmJlmzAtY1jqrnGqfyNObLmOYF36TBG6L28FfYZ8tIl1hAnOfpos4/bDWPdRYWte4wXH+YYBLpcfhFoAETbVWmydo53ZS2J7ybdYWfVVjk1NOZ8F3ssbvxAkeC5Bg2taS3SdFyrO+SyoWDCYbEKa3Ews7QrRxT9XGQ3VVsDckrGbYM5Gnr3DrwTWGxRzCSZWaoVpzOm8/QXHWTHkU9/uy2/H78+KsxOEUrrczbsx7HsdTqND2OEOBuL6EEHdPEEKsZ2cbBFKpIdwfYjWN5tjqBoPoqWjVLBJs7U6W5Dw4qZT2uW3nTl1TlhiGmuxmu0+DqtxAY5j5hrW2JDid6GkCHXdFuS0f8Apk9uasCY3WgnlmcGtv8AMIvxPfa62VthzodJ1sIiIJE/3/urnAtwX4lSoaYDqrXNqFrnNa/MZJcwHKTN80SDeVylp5RLtOdrQ5iMIAJA4TAFiOYHjMeSrTgy89Vf4d7HZWNqh2WLuBDgJJBMWLtL883AwiOELKkRLHyWkXDX6kdzSJMHQjvCszr1KxRQvp03mSkdsuAoWIwK01etDsrhBvHIxyPPuUaoAUxarYvZteGZOpgiEwcMtHVw55KM/DdyJWdtKH/ZErhgyr9mH7lwwrybNPojVkpFA7COHBO4ZmR4dJsIIEXlzHNF9TuzHKOdr52xqjzBe1rAfy3e4QNSfhvOnJWD9j0XNEsAc2bibnmY+I2F9e9Lu01tGSnLyjIY3DYitXY91KGAPBe0Brg15LjOcmS0usQOlwo2E2XjGvkVMjd4g5w+4nKCO+y179k0jBgtsTAJIPfe5tHFV+LwbARDSNLscRw1IOqVTXgfNUSezGKxILjimgCAGZYLuM5gHEDhyXJilULYLXZuTjxF91333rlTueS/Gq8csyTXwmsRUtqnHBRMRoeUH0VdLka64IQs3rH7pl1TeAuJI+tuaLEvMx93uojpkdQrJVRc42tcAaHe8QS30E+KiVcSdJ1Iv49en7rsS/4RyB+/VQqr5+/VccanA1gwW+FoAF/G88P8KS7Hls3/AM6ibqlbUhtpsR5R3+C59W0ffP3UpsFpM0exNoxmdOrja9srQRx5uV5T7QETDrza+o+vKPdYfZNXKxx5Pd5FrR5p6piCJg9/MaG1/foi3AuEbRm389UMcJblLu/dLYP1Vg/FMDS6DDYJ6ETMd1/JeZ0sUW1WHmHt82yPRXr9qEcY3cp+9BqR/hErwLrRTNdTxTHlzWkEts7iROhjiP2I4FQcZhg+Gue4D9VNxY6TzbeRovP6naJ7Kwe0mwgjQOafiaR80uHU8FsKGPbVY2ox24dANZvYjzEc5U/FB/j+Sbh2vw+lQ1aZEkOG9BE8PC45lTnYpsWgg+az7cZFhPnew4cSlbXNwJH78YHmu+Ic9BF9T2he97+X2fqnH4/zWdbiY04zP396oW4lxPExGl46oHqBzppGgfiwW3MESQY4cQqjE4jKTwnKdP1CfAFT2sBnNADdTO7BvJ7oWX2rtQVXksm8AAagQA29uA06oN7GzGCwNUgjLpYkG/3yXKFhqmZwa0SQ2DYxJPPw+7rlG5DFJjHbSe02Obw90o2tI3hH1UZzE26kh2oLcTXvBgg2hNugec/ZUNry3pyTzarTrIPmPojBwSsS4GD9xqPVRX6J8UnlshpI4EXH006FMPC4hE/8XiDMhvdw5DjpZNPrKO2pIvqNe/v6ptz1x2CzwFc5Hi9nNPmCD/19E4/FX+/viVVUapAcOBA+/qkNVcc5J5xcPY46Bwnpob9CVJxOMsRJ81RvfK59WVxO06u+TKvOymMLDVH5cod3AzH1n6LPwSYWiweGNOmRG9Ic7QxbdZ32uRyIUMl8LBcVtogkQBoOIHnJ7zxTpxEixHObyfLqs+xhMXA6yD/ZXGx8LvjlMGdLRMocg4H6TgZu53/iJAvEXn9ldYZ4cz4Q1s6N8ZAHE216qNgqAyOc0Trl4DemNe4m3ckZtGlnNBhzOYCXuaAWsJtlH6nyY5C/KFASBx22C2aLaL3AAAlsG+rQ5tpsZgHl4R8DTa7NFOtnMXdSe0NFhNgQTYDXmrZ/YzCudJNQEjeaHmMx1dp8Wp5XNk3S7G0GZS2pWJa6Zzxm5AgCIHdCnGQ9rwS9l7OZhpfVJBI+EwXk8Gta2/j+y5OMwDGOL2sa1zrEgRImVyLYQeUADmlLELERPh9/RSLG3NSNp2lGE/Tba645sYpsMyCR3ix8wrfDY2Ya5rHaXLGz0kf5UJrbD77rqXhGbwhSkC2bWl2VwlWmyWFj6g3ixxsdZymWjos/V7DOJOSo2LxmBBkEggwO4q82Ljw0gE6cLaAHibGxj7k2Gza4cHx+Wo8R3Egt9SuwDueDzfafZzEUDvMzNIJzMl7QAR8Vt3hrzVMRw5L3bD24a2T9XZWHrNDX0WPA0lrbcLGLLtuSVqY7ngBKFejbL7NYZ9fF4WuyKlJv4lF7SWh1PjmAMEgOYdP1cli6+BDaj2MdnAcQHxE3gQOZ8ovpdQ0NTT4Hdj0N4OiQ08gZdwEHkYP+VoMS3KyOev8AyPPmfuwR7C2fnADfhbc/pmBcudwue862khXT9lmob2Y2cs2c6RE5ToL8b2FrIOWzmZ3ZmGc4ghu62L6CZt4rR4bBfhMl5AJG85xDWNaRBcTPfA1JOinYLBhmoba4ABgHnJ+I98Doq7tFsY4gZs7jllzadshIHdfNFgfYqdrIKDb3aI5Pw6DS1mgqGc7pEHIPygxE666SrHsbsZ2HY6tVble/LkYdWtBnM8cJtAKl9nuzn+3catWXPt+Hm+FrS0HMLzmBsZA05FXFTM4kkySimM/g51g78com4opksXBidtB3smNqyuURco2hbjymbok2DdEHBKOFY3opTGJmnwgqYGiR6xPn9AuBYmWOB+z9+SnYRscNOOn2FFaNYuY00+/vwnYYH29O/RSgKJFJxaZBvE6+y0PZ2nDHuGhqd+obcdLrOsHKB5RePu3NaXsuyWPHDPPm2PZSwUXrAYsrXAtkeSg0m8PvRWeGELkRR5128pObjqJbUNP8el+C5zRJguLXCOMtcApNHsth2iMriIAguPA3Nudp55QNAqn/AFKx04yk1pvSa0zNw4uzeFg0+K12f76qZlPIxVhIBlMNblaA1o0AsPJCWpcyTMiD4YIlcSlL02XFMmci7tSOOeSZJmyUuTcJSFPpRXeucXJWkFCGpQxTmSPjCrkmWUq7MnfGPIZko3G37ptqcdoPviqZeJWFbfRT6ZHDr4Ry7gVDwXHoPVSnt3B1P00UgsP8LWePI34efn/ewZShsRYam4NzHWNPZQHbsR9bq3I3D4KUAxqk2xkEmZ4TbT6W+4Wo7Ksii46lz3eQtpwvPErLE2HT91quzn/12dT/ANiprsCjSYduiPaOObQpvqOMNY0uPhwHedPFDhOHRZH/AFUruGGaAbOqNDu8BpcB5gHwXeDsZeDzjF4t1es+s74nuLj3A6AdwEDwXqbHbrflb6DkvJ6HBep0fhb8rfRHC7hW+UOOf7ITUQn9kDkaWWC3hBZpTrUwxOuRU8cFVt1WB1rgllMFI1QpCe2fA9nulD00uai2oX8VfQeD1yRui5RhHfE+x//Z",
  atributos: {
    ataque: 5,
    defesa: 9,
    força: 10
  }
};

var carta4 = {
  nome: "Capitao Rex",
  imagem:
    "http://pm1.narvii.com/6606/1d426d1ec4c3a9d8fbe747242136468de340194c_00.jpg",
  atributos: {
    ataque: 2,
    defesa: 10,
    força: 1
  }
};

var carta5 = {
  nome: "R2D2",
  imagem:
    "https://i.pinimg.com/550x/8f/3c/51/8f3c518926b90d421df96673f7da2b49.jpg",
  atributos: {
    ataque: 2,
    defesa: 2,
    força: 4
  }
};

var carta6 = {
  nome: "Han Solo",
  imagem: "https://upload.wikimedia.org/wikipedia/pt/f/f4/HanSolo.jpg",
  atributos: {
    ataque: 10,
    defesa: 8,
    força: 8
  }
};

var carta7 = {
  nome: "Mara Jade",
  imagem:
    "http://pm1.narvii.com/6342/0b571d48c0988447287e4bdba0703ef1e2c4f76a_00.jpg",
  atributos: {
    ataque: 7,
    defesa: 5,
    força: 10
  }
};

var carta8 = {
  nome: "Conde Dookan",
  imagem:
    "http://pm1.narvii.com/6297/af8e2d6b493b14161bcb00f2b9093559ba7738cf_00.jpg",
  atributos: {
    ataque: 10,
    defesa: 8,
    força: 5
  }
};

var carta9 = {
  nome: "Ezra Bridge",
  imagem:
    "https://cosmonerd.com.br//uploads/2021/01/star-wars-rebels-season-3-ezra-cosmonerd-1024x512.jpg",
  atributos: {
    ataque: 1,
    defesa: 2,
    força: 7
  }
};

var carta10 = {
  nome: "Galen merrick",
  imagem:
    "http://pm1.narvii.com/6343/6d37533d0e078c88780da79653eec0c2ab9a370f_00.jpg",
  atributos: {
    ataque: 5,
    defesa: 8,
    força: 6
  }
};

var cartas = [
  carta1,
  carta2,
  carta3,
  carta4,
  carta5,
  carta6,
  carta7,
  carta8,
  carta9,
  carta10
];

var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 10);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 10);
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 10);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  exibirCartaJogador();
  exibirCartaMaquina();
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado");
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

  if (valorCartaJogador > valorCartaMaquina) {
    htmlResultado = "<p class='resultado-final'> Venceu</p>";
  } else if (valorCartaMaquina > valorCartaJogador) {
    htmlResultado = "<p class='resultado-final'> Perdeu </p>";
  } else {
    htmlResultado = "<p class='resultado-final'> Empatou </p>";
  }
  console.log(divResultado);

  divResultado.innerHTML = htmlResultado;

  document.getElementById("btnJogar").disabled = true;
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  //ou pode escrever assim,para colocar a imagem dentro do HTML ->
  // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';

  var tagHTML = "<div id='opçoes' class='carta-status'>";
  var opcoesTexto = "";

  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  //ou pode escrever assim,para colocar a imagem dentro do HTML ->
  // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';

  var tagHTML = "<div id='opçoes' class='carta-status'>";
  var opcoesTexto = "";

  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}
