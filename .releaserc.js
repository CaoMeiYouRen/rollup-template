module.exports = {
    plugins: [
        [
            "@semantic-release/commit-analyzer",
            {
                "config": "conventional-changelog-cmyr-config"
            }
        ],
        ["@semantic-release/release-notes-generator",
            {
                "config": "conventional-changelog-cmyr-config"
            }],
        [
            "@semantic-release/changelog",
            {
                "changelogFile": "CHANGELOG.md",
                "changelogTitle": "# auto-release-template"
            }
        ],
        '@semantic-release/npm',
        '@semantic-release/github',
        [
            "@semantic-release/git",
            {
                "assets": [
                    "src",
                    "CHANGELOG.md",
                    "package.json"
                ]
            }
        ]
    ]
}