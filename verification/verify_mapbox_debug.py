
from playwright.sync_api import sync_playwright

def verify_mapbox(page):
    page.goto("http://localhost:3000")
    # Wait for the text to appear
    page.get_by_text("Istanbul, TR").wait_for()

    # Locate the element with the background image
    # We find the parent with text "Istanbul, TR"
    # Then we find the div with "opacity-50" class inside that card.
    # The structure:
    # motion.div (card) -> div (absolute inset-0 opacity-50 ...) -> ...
    # motion.div (card) -> div (content) -> ... -> "Istanbul, TR"

    # We can locate the card first.
    # The card contains "Istanbul, TR".
    # And it has a div with class "opacity-50".

    card = page.locator(".group", has_text="Istanbul, TR")
    bg_div = card.locator(".opacity-50").first

    # Print the outerHTML to verify the style attribute
    html = bg_div.evaluate("el => el.outerHTML")
    print(f"HTML: {html}")

    # Hover to see effects
    card.hover()
    page.wait_for_timeout(1000)
    page.screenshot(path="verification/mapbox_hover.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            verify_mapbox(page)
        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()
