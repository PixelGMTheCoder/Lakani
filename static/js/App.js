import {
    Routes,
    Route
} from "react-router-dom";
import {
    Home,
    ProductDetail,
    Products,
    Checkout,
    Messages,
    About,
    SearchResult,
    CashReader,
    Login,
    VirtualPassion,
    Courses,
    OrderForm,
    FeatureLeader,
} from "./pages";

function App() {
    return ( <
        Routes >
        <
        Route path = "/"
        element = { < Login / >
        }
        /> <
        Route path = "/home"
        element = { < Home / >
        }
        /> <
        Route path = "/detail-product/:id"
        element = { < ProductDetail / >
        }
        /> <
        Route path = "/products"
        element = { < Products / >
        }
        /> <
        Route path = "/checkout"
        element = { < Checkout / >
        }
        /> <
        Route path = "/messages"
        element = { < Messages / >
        }
        /> <
        Route path = "/about"
        element = { < About / >
        }
        /> <
        Route path = "/search/:keyword"
        element = { < SearchResult / >
        }
        /> <
        Route path = "/cash-reader"
        element = { < CashReader / >
        }
        /> <
        Route path = "/virtual-fashion"
        element = { < VirtualPassion / >
        }
        /> <
        Route path = "/courses"
        element = { < Courses / >
        }
        /> <
        Route path = "/order"
        element = { < OrderForm / >
        }
        /> <
        Route path = "/future-leader"
        element = { < FeatureLeader / >
        }
        /> <
        /Routes>
    );
}

export default App;